(async () => {
    const exportModule = await import('./export.js')
    console.log(exportModule)
    const exportSrt = exportModule.exportStr
    const karamba = new exportModule.Karamba('nothing')

    karamba['how much'] = 'more than'

    console.log(exportSrt)
    console.log(karamba)
})()

