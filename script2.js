
function redirectOption(selectElement) {
    var selectedValue = selectElement.value;
    var url = '';

    switch (selectedValue) {
        case 'pericos':
            url = 'establishments-pericos.html';
            break;
        case 'bloemen':
            url = 'establishments-bloemen.html';
            break;
        case 'dlsu-main':
            url = 'establishments-dlsu-main.html';
            break;
        case 'agno':
             url = 'establishments-agno.html';
            break;
        default:
            // Handle the default case or invalid selection
            break;
    }

    if (url !== '') {
        window.location.href = url;
    }
}

function performSearch() {
    const searchQuery = document.getElementById('searchInput').value.trim();

    switch (searchQuery) {
      case 'fries':
        window.location.href = 'search-results-fries.html';
          break;
      case 'waffles':
        window.location.href = 'search-results-waffles.html';
          break;
      case 'takoyaki':
        window.location.href = 'search-results-takoyaki.html';
          break;
      case 'ice cream':
        window.location.href = 'search-results-icecream.html';
          break;
      case 'coffee':
        window.location.href = 'search-results-coffee.html';
          break;
    case 'snacks':
        window.location.href = 'search-results-snacks.html';
          break;
    case 'asian':
        window.location.href = 'search-results-asian.html';
          break;
    default:
      window.location.href = 'none-search-results.html';
        break;
  }

  }
  
  
  
  
  
  