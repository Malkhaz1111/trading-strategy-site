document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const strategyList = document.querySelector('.strategies ul');

    // ჩაიტვირთოს არსებული სტრატეგიები
    loadStrategies();

    // ფორმის გაგზავნა
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = form.elements['strategy-name'].value.trim();
        const description = form.elements['description'].value.trim();

        if (name && description) {
            const strategy = { name, description };
            saveStrategy(strategy);
            addStrategyToUI(strategy);
            form.reset();
        }
    });

    // Strategy UI-ში დამატება
    function addStrategyToUI(strategy) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${strategy.name}</strong> - ${strategy.description}`;
        strategyList.appendChild(li);
    }

    // Strategy შენახვა localStorage-ში
    function saveStrategy(strategy) {
        const strategies = JSON.parse(localStorage.getItem('strategies') || '[]');
        strategies.push(strategy);
        localStorage.setItem('strategies', JSON.stringify(strategies));
    }

    // Strategy ჩატვირთვა UI-ში
    function loadStrategies() {
        const strategies = JSON.parse(localStorage.getItem('strategies') || '[]');
        strategies.forEach(addStrategyToUI);
    }
});
