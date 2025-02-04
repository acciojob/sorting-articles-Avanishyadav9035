//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function removeAAnThe(name){
	return name.replace(/^(a/an/the)/i, '').trim();
}
const sortedBands = bands.sort((a,b)=>removeAAnThe(a).localeComare(removeAAnThe(b)));
const bandList = document.getElementById('band');
bandList.innerHTML = sortedBands.map(band=>`<li>${band}</li>`).join('');
