module.exports = router => {
  const mongoose = require('mongoose')
  const Article = mongoose.model('Article')
  const Category = mongoose.model('Category')
  // 初始导入新闻，正式使用时弃用
  router.get('/news/init', async (req, res) => {
    const parent = await Category.findOne({
      name: "新闻分类"
    })
    const cats = await Category.find().where({
      parent: parent
    }).lean()
    const newsTitles = ["王者荣耀联合乘车码送豪华大礼，五五开黑不氪金！", "五虎有灵，音乐发声，王者荣耀音乐公开课来啦！", "中国电信同城线上开黑活动开启", "新皮肤爆料丨老将在此，谁能挡我？黄忠-烈魂新装登场！", "最是一年上星时——《王者荣耀》五五开黑节荣获App Store推荐", "5月8日全服不停机优化公告", "5月7日全服不停机优化公告", "5月7日“演员”惩罚名单", "5月7日外挂专项打击公告", "5月7日净化游戏环境声明及处罚公告", "黄忠-烈魂五虎上将限定皮肤即将上架，缤纷好礼齐降临", "“五五打卡游”活动开启", "与我为伍，彼此守护，活动专属皮肤&amp;五五局内表现获取全攻略", "五五开黑节，赵云-龙胆即将上架，多重福利来袭", "峡谷寻宝第二话——传说史诗皮肤自选寻宝活动开启", "【原创内容大赛音乐比赛】优秀作品合集（二）", "大众赛事合作赛道全面开启，携手合作伙伴共建王者电竞生态", "【KPL今日预报】南京Hero久竞 vs DYG，DYG.久诚迎战老东家能否取胜", "关于责成TS俱乐部就欠薪问题进行说明的通知", "《一招即浪》第二期：逆天牛魔王最浪打法，城市赛教你一招制敌"]
    const newsList = newsTitles.map(title => {
      const randomCats = cats.slice(0).sort((a, b) => Math.random() - 0.5)
      return {
        categories: randomCats.slice(0, 2),
        title: title
      }
    })
    await Article.deleteMany({})
    await Article.insertMany(newsList)

    res.send(newsList)
  })

  // 获取新闻列表
  router.get('/news/list', async (req, res) => {
    // const parent = await Category.findOne({
    //   name: '新闻分类'
    // }).populate({
    //   path: 'children',
    //   populate: {
    //     path: 'newsList',
    //   }
    // }).lean()

    const parent = await Category.findOne({
      name: '新闻分类'
    })
    // 使用聚合管道进行关联查询
    const cats = await Category.aggregate([{
        $match: {
          parent: parent._id
        }
      },
      {
        $lookup: {
          from: 'articles',
          localField: '_id',
          foreignField: 'categories',
          as: 'newsList'
        }
      },
      {
        $addFields: {
          newsList: {
            $slice: ['$newsList', 5]
          }
        }
      }
    ])
    // 添加热门项
    const subCats = cats.map(v => v._id)
    cats.unshift({
      name: '热门',
      newsList: await Article.find().where({
        categories: {
          $in: subCats
        }
      }).populate('categories').limit(5).lean()
    })

    // 添加categoryName项，标明类别名称
    cats.map(cat => {
      cat.newsList.map(news => {
        news.categoryName = cat.name == '热门' ? news.categories[0].name : cat.name
      })
      return cat
    })

    res.send(cats)
  })
}