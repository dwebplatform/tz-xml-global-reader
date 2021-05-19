 
function convertXMLToJson(xml) {
      let xmlData = $.parseXML(xml);
      let x2js = new X2JS();
      let data = x2js.xml2json(xmlData);
      return data;
    }