const socket = io();
socket.on('connect', () => {
	console.log('me conecte!');
});

socket.on('randomProduct-list', (data) => {
	let productos = '';

	data.forEach((item) => {
		productos += `
					<tr>
						<td class="border p-10">${item.name}</td>
						<td class="border p-10">${item.price}</td>
						<td class="border p-10"><img src="${item.thumbnail}" class="max-w-xs"/></td>
					</tr>
		`;
	});

	document.getElementById('div-list-productos').innerHTML = productos;
});
