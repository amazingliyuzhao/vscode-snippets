const vscode = require('vscode');
// const util = require('./util');
const snippetsList = require('./snippets.js')

/**
 * 自动提示实现，这里模拟一个很简单的操作
 * 当输入 this.dependencies.xxx时自动把package.json中的依赖带出来
 * 当然这个例子没啥实际意义，仅仅是为了演示如何实现功能
 * 接收三个参数
 *  第一个是要关联的文件类型；
    第二个是一个对象，里面必须包含provideCompletionItems和resolveCompletionItem这2个方法；
    第三个是一个可选的触发提示的字符列表；
 * @param {*} document
 * @param {*} position
 * @param {*} token
 * @param {*} context
 */
function provideCompletionItems(document, position, token, context) {
    const line = document.lineAt(position);
    // const projectPath = util.getProjectPath(document);

    console.log('--------')
    console.log(snippetsList)
    // 只截取到光标位置为止，防止一些特殊情况
    const lineText = line.text.substring(0, position.character);
    const dependencies = snippetsList.components
    const localDependencies = snippetsList.local
    // 简单匹配，只要当前光标前的字符串为`this.dependencies.`都自动带出所有的依赖
    if(/(^|=| )\w+\.ddd\.$/g.test(lineText)) {
        // const json = require(`${projectPath}/package.json`);
        // const dependencies = Object.keys(json.dependencies || {}).concat(Object.keys(json.devDependencies || {}));
        return dependencies.map(dep => {
            // vscode.CompletionItemKind 表示提示的类型
            console.log('--------')
            console.log(dep)

            return new vscode.CompletionItem(dep.name, vscode.CompletionItemKind.Field);
        })
    }else if(/Local\.$/g.test(lineText)){
        return localDependencies.map(dep => {
            // vscode.CompletionItemKind 表示提示的类型
            return new vscode.CompletionItem(dep.name, vscode.CompletionItemKind.Field);
        })
    }
}

/**
 * 光标选中当前自动补全item时触发动作，一般情况下无需处理
 * @param {*} item
 * @param {*} token
 */
function resolveCompletionItem(item, token) {
    return null;
}

module.exports = function(context) {
    // 注册代码建议提示，只有当按下“.”时才触发
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider('vue', {
        provideCompletionItems,
        resolveCompletionItem
    }, '.'));
};