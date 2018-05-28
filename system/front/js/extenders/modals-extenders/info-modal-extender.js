const remote=require("electron").remote;
module.exports=function(){
  console.log("//info filling...")
  $(".info-fill").each(function(){
    switch($(this).data("infofiller")){
      case "appversion":
        $(this).html(remote.app.getVersion());
        break;
      case "apppath":
        $(this).html(process.resourcesPath);
        break;
      case "nodeversion":
        $(this).html(process.versions.node);
        break;
      case "chromeversion":
        $(this).html(process.versions.chrome);
        break;
      case "electronversion":
        $(this).html(process.versions.electron);
        break;
      case "v8version":
        $(this).html(process.versions.v8);
        break;
    }
  });
}
