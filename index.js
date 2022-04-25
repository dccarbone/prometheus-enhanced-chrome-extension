if (document.title == "Prometheus Time Series Collection and Processing Server" || document.title == "Thanos | Highly available Prometheus setup") {
    const url = location.protocol + '//' + location.host

    async function getPromVersion() {

        let result = await Promise.resolve(jQuery.get({ url: url + '/api/v1/status/buildinfo' }))
        return result.data.version

    }

    async function displayPromVersion() {
        const prom_version = await getPromVersion()
        const elem = document.createElement('span')
        elem.textContent = prom_version
        elem.style.position = "fixed"
        elem.style.top = "20px"
        elem.style.fontSize = "12px"
        elem.style.opacity = 1
        elem.classList.add('badge')
        elem.classList.add('badge-light')
        if (prom_version == "2.21.0") {
            elem.style.right = "20px"
            document.querySelector("a.navbar-brand").appendChild(elem)
        } else {
            elem.style.right = "133px"
            document.querySelector("a.navbar-brand").appendChild(elem)
        }

    }


    async function loadScript() {
        const prom_version = await getPromVersion()
        if (prom_version == "2.21.0") {
            console.log("Unsupported version")
        } else {
            var s = document.createElement('script');
            s.src = chrome.runtime.getURL('script.js');
            s.onload = function () {
                this.remove();
            };
            (document.head || document.documentElement).appendChild(s);
        }
    }

    displayPromVersion()
    loadScript()

}








