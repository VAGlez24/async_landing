const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCjM-Wd2651MWgo0s5yNQRJA&part=snippet%2Cid&order=date&maxResults=9';
const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '99f451e7bemshcc626fa78197f96p1d2dddjsn714aaf219ac1',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(url) {
	const response = await fetch(url, options);
	const result = await response.json();
	return result;
}

(async () => {
    try {
        const data = await fetchData(API);
        let view = `
        ${data.items.map(item => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${item.snippet.thumbnails.high.url}" alt="${item.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${item.snippet.title}
                    </h3>
                </div>
            </div>
        `).slice(0, 4).join('')}
        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();