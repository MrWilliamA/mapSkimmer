
  function fetchLocations() {
  
    fetch('http://localhost:3000/store')
    .then(response => response.json())
    .then( json => renderLocations(json));  
  }
  
  function renderLocations(locations) {

    Object.keys(locations).forEach(key => {

      const country = locations[key].country;
      const emails = locations[key].email;
      const name = locations[key].name;

      const dataNames = document.getElementById('dataNames');
      const dataCountry = document.getElementById('dataCountry');
      const dataEmails = document.getElementById('dataEmails');

      console.log(locations)
      if(emails != undefined) {
        const dataNamesP = document.createElement('p');
        dataNamesP.innerText = name;
       
        const dataCountryP = document.createElement('p');
        dataCountryP.innerText = country;

        const dataEmailsP = document.createElement('p');
        dataEmailsP.innerText = emails;
       
        dataNames.append(dataNamesP)
        dataCountry.append(dataCountryP)
        dataEmails.append(dataEmailsP)


      }

      });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    fetchLocations();
  });

  // make copy buttons

  let copyBtnNames = document.getElementById('dataNamesBtn');
  let copyBtnCountry= document.getElementById('dataCountryBtn');
  let copyBtnEmails = document.getElementById('dataEmailsBtn');


  copyBtnNames.addEventListener('click', copyNames);
  copyBtnCountry.addEventListener('click', copyCountries);
  copyBtnEmails.addEventListener('click', copyEmails);

  
  
  function copyNames(ev){
    let div = document.getElementById('dataNames');
    let text = div.innerText;
    let textArea  = document.createElement('textarea');
    textArea.width  = "1px"; 
    textArea.height = "1px";
    textArea.background =  "transparents" ;
    textArea.value = text;
    document.body.append(textArea);
    textArea.select();
    document.execCommand('copy');   //No i18n
    document.body.removeChild(textArea);
  }

  function copyCountries(ev){
    let div = document.getElementById('dataCountry');
    let text = div.innerText;
    let textArea  = document.createElement('textarea');
    textArea.width  = "1px"; 
    textArea.height = "1px";
    textArea.background =  "transparents" ;
    textArea.value = text;
    document.body.append(textArea);
    textArea.select();
    document.execCommand('copy');   //No i18n
    document.body.removeChild(textArea);
  }

  function copyEmails(ev){
    let div = document.getElementById('dataEmails');
    let text = div.innerText;
    let textArea  = document.createElement('textarea');
    textArea.width  = "1px"; 
    textArea.height = "1px";
    textArea.background =  "transparents" ;
    textArea.value = text;
    document.body.append(textArea);
    textArea.select();
    document.execCommand('copy');   //No i18n
    document.body.removeChild(textArea);
  }