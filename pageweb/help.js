var searchIndex = ["404 Error","Address Bar","Ajax","Apache","Autoresponder","BitTorrent","Bot","Broadband","Captcha","Certificate","Client","Cloud","Cloud Computing","CMS","Cookie","CSS","Cyberspace","Denial of Service","DHCP","Dial-up","DNS Record","Domain Name","Download","E-mail","Facebook","FiOS","Firewall","FTP","Gateway","Google","Google Drive","Gopher","Hashtag","Hit","Home Page","HTML","HTTP","HTTPS","Hyperlink","Hypertext","ICANN","Inbox","Internet","InterNIC","IP","IP Address","IPv4","IPv6","IRC","iSCSI","ISDN","ISP","JavaScript","jQuery","Meta Search Engine","Meta Tag","Minisite","Mirror","Name Server","Packet","Page View","Payload","Phishing","POP3","Protocol","Scraping","Search Engine","Social Networking","Socket","Spam","Spider","Spoofing","SSH","SSL","Static Website","Twitter","XHTML"];

var input = document.getElementById("searchBox"),
    ul = document.getElementById("searchResults"),
    inputTerms, termsArray, prefix, terms, results, sortedResults;


var search = function() {
  inputTerms = input.value.toLowerCase();
  results = [];
  termsArray = inputTerms.split(' ');
  prefix = termsArray.length === 1 ? '' : termsArray.slice(0, -1).join(' ') + ' ';
  terms = termsArray[termsArray.length -1].toLowerCase();
  
  for (var i = 0; i < searchIndex.length; i++) {
    var a = searchIndex[i].toLowerCase(),
        t = a.indexOf(terms);
    
    if (t > -1) {
      results.push(a);
    }
  }
  
  evaluateResults();
};

var evaluateResults = function() {
  if (results.length > 0 && inputTerms.length > 0 && terms.length !== 0) {
    sortedResults = results.sort(sortResults);
    appendResults();
  } 
  else if (inputTerms.length > 0 && terms.length !== 0) {
    ul.innerHTML = '<li>Whoah! <strong>' 
      + inputTerms 
      + '</strong> is not in the index. <br><small><a href="https://google.com/search?q=' 
      + encodeURIComponent(inputTerms) + '">Try Google?</a></small></li>';
    
  }
  else if (inputTerms.length !== 0 && terms.length === 0) {
    return;
  }
  else {
    clearResults();
  }
};

var sortResults = function (a,b) {
  if (a.indexOf(terms) < b.indexOf(terms)) return -1;
  if (a.indexOf(terms) > b.indexOf(terms)) return 1;
  return 0;
}

var appendResults = function () {
  clearResults();
  
  for (var i=0; i < sortedResults.length && i < 5; i++) {
    var li = document.createElement("li"),
        result = prefix 
          + sortedResults[i].toLowerCase().replace(terms, '<strong>' 
          + terms 
          +'</strong>');
    
    li.innerHTML = result;
    ul.appendChild(li);
  }
  
  if ( ul.className !== "term-list") {
    ul.className = "term-list";
  }
};

var clearResults = function() {
  ul.className = "term-list hidden";
  ul.innerHTML = '';
};
  
input.addEventListener("keyup", search, false);


