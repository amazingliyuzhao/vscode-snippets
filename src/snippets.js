module.exports = {
    components:[{
        name:'<c-butotn></c-butotn>',
        desc:'按钮组件'
    },
    {
        name:'<c-dialog></c-dialog>',
        desc:'弹窗组件'
    },
    {
        name:'<c-bookCover></c-bookCover>',
        desc:'书封'
    },
    {
        name:'<c-tip></c-tip>',
        desc:'tip组件'
    },
    {
        name:'c-loading',
        desc:'loading组件'
    },
    {
        name:'c-checkbox',
        desc:'多选组件'
    }],
    local:[{
        name:`setTitleBar(
            null,
            null,
            {
              position: 'right',
              type: 'text',
              content: '常见问题',
              callback: 'goRule'
            },
            null
          )`,
        desc:'获取广告posid'
    },{
        name:'getLastReadBook',
        desc:'获取用户最近阅读的一本书'
    }]
}