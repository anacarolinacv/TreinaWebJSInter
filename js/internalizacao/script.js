const Template = (function(){

        const listElement = document.querySelector("list");
        const languagueSelect = document.querySelector('#languagetags');
        let languageTag = 'en-US';

        let listItens = [
            {
                name: 'JavaScript',
                created_at: '2020-07-25t30:10:50z',
                forks: 18300
            },
            {
                name: 'Java',
                created_at: '2020-06-25t30:10:50z',
                forks: 130300
            },
            {
                name: 'Python',
                created_at: '2020-06-25t30:10:50z',
                forks: 2
            }
        ]

        languagueSelect.addEventListener('change', changeLanguage);

        function changeLanguage() {
            languageTag = languagueSelect.value;
            render();
        }

        function render () {''
            let html = '';
            const numberFormatter = new Intl.numberFormatter(languageTag);
            const dateFormatter = new Intl.dateFormatter(languageTag, {
                year : 'numeric',
                week : 'long',
                month: 'long'
            });
            listItens.forEach(item => {
                const forks = numberFormatter.format(item.forks);
                const createdAt = dateFormatter.format(new Date(item.created_at));
                html += `
                    <li>
                        <div>
                            <b>Name:</b> ${item.name}
                        </div>
        
                        <div>
                            <b>Created At:</b> ${createdAt}
                        </div>
                        <div>
                            <b>Forks:</b> 200 ${item.forks}
                        </div>
                    </li>
                `;
            
            })

        function changeLanguage() {
            languageTag = languagueSelect.value();
            render();
        }


})();


const Data = (function(){
    const searchInput = document.querySelector('#search');


    searchInput.addEventListener('keyup', search);

    function search(event) {
        // tecla enter
        if(event && event.keyCode == 13) {
            const searchQuery = searchInput.value;
            fetch(`https://github.com/anacarolinacv?tab=repositories?q= $(searchQuery)`)
            .then(response => response.json())
            .then(response => response.itens)
            .then($.setList);
        }
    }

})(Template);