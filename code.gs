

function myFunction() {


}

  function createPDF(){

    const info = {
      'Name': ['Tareq'],
      'Date': ['2/27/2022'],
      'Bed time of yesterday': ['1:00:00 AM'],
      'Wake up time': ['5:40:00 AM'],
      'Total Prayer': ['5'],
      'Quran recitation': ['1-7'],
      'Git contribution ': ['4'],
      'GitHub profile link': ['https://github.com/tirahman105'],
      'Total working Hour': ['11'],
      'Work details ': ['https://github.com/tirahman105'],
      'Video summary': ['https://github.com/tirahman105']

    };

    const pdfFolder = DriveApp.getFolderById("1y0B8UGSbLz_Fjh9Hejd6ggtz7rAc4gID");
    const tempFolder = DriveApp.getFolderById("1In1Ixh5NJg8OqXHVCQnyW96p8ql2TJix");
    const templateDoc = DriveApp.getFileById("1KJyG-UEgoqy70LvJtyoP5T03qeW3oY1iclWQuj_GubM");

    const newTempFile = templateDoc.makeCopy(tempFolder);

    const openDoc =DocumentApp.openById(newTempFile.getId());
    const body = openDoc.getBody();
    body.replaceText("{name}", info['Name'][0]);
    body.replaceText("{date}", info['Date'][0]);
    body.replaceText("{bt}", info['Bed time of yesterday'][0]);
    body.replaceText("{wt}", info['Wake up time'][0]);
    body.replaceText("{p}", info['Total Prayer'][0]);
    body.replaceText("{q}", info['Quran recitation'][0]);
    body.replaceText("{gc}", info['Git contribution'][0]);
    body.replaceText("{gp}", info['GitHub profile link'][0]);
    body.replaceText("{wh}", info['Total working Hour'][0]);
    body.replaceText("{wd}", info['Work details'][0]);
    body.replaceText("{v}", info['Video summary'][0]);

    openDoc.saveAndClose();
    

    const blobPDF = newTempFile.getAs(MimeType.PDF);
    const pdfFile = pdfFolder.createFile(blobPDF).setName("My PDF");
  }
  

