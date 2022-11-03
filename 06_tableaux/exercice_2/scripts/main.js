/*
2) Ecrire une fonction qui récupère les extensions d'une liste de nom de fichiers.
*/

(function() {

  let files = ["test.png","truc.bidule.gif","document.txt","documentSansExtension","truc.txt"];

  function getExtensions(fileArray) {

    function keepExtension(filename) {
      let splitName = filename.split(".");
      if (splitName.length > 1) {
        return splitName[splitName.length - 1];
      }
      return undefined;
    }

    let result = [];
    fileArray.forEach(f => result.push(keepExtension(f)));
    return result;
  }
  
  let extensions = getExtensions(files);
  console.log(extensions);  

})();