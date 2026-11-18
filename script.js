const addressEnglish = 'Flat No. 401, Krishna Kuteer Apartment, Jenda Chettu Opposite Road, Burripalem Road, Nazarpet, Tenali.';
const addressTelugu = 'ఫ్లాట్ నం. 401, కృష్ణ కుటీర్ అపార్ట్‌మెంట్,\nజెండా చెట్టు ఎదురుగా ఉన్న రోడ్, బుర్రిపాలెం రోడ్,\nనాజర్‌పేట, తెనాలి.';

const copy = {
  te: {
    skip: 'ప్రధాన విషయానికి వెళ్లండి', brand: 'శుభ ఆహ్వానం', directionsShort: 'దారి చూపించండి',
    eyebrow: 'మా నూతన గృహ శుభారంభం', heroTitle: 'గృహప్రవేశ ఆహ్వానం',
    heroLede: 'మా కొత్త ఇంటి శుభ సందర్భంలో మీ కుటుంబ సమేతంగా విచ్చేసి ఆశీర్వదించాలని మనస్ఫూర్తిగా ఆహ్వానిస్తున్నాము.',
    month: 'నవంబర్ 2026', weekday: 'శుక్రవారం • తెనాలి', viewSchedule: 'కార్యక్రమ వివరాలు',
    getDirections: 'గూగుల్ మ్యాప్స్ దారి', seeOriginal: 'అసలు ఆహ్వాన పత్రిక చూడండి ↗',
    scheduleKicker: '20 నవంబర్ 2026 • శుక్రవారం', scheduleTitle: 'కార్యక్రమాలు',
    scheduleIntro: 'రోజు జరిగే ప్రతి శుభ కార్యక్రమానికి మీ రాక మాకు ఎంతో ఆనందం.',
    time1: 'ఉదయం 9:45', eventType1: 'శుభారంభం', event1: 'గృహప్రవేశం', eventDesc1: 'మా కొత్త ఇంటిలోకి అడుగుపెట్టే శుభ ఘడియ.',
    time2: 'ఉదయం 11:00', eventType2: 'పూజా కార్యక్రమం', event2: 'శ్రీ సత్యనారాయణ స్వామి వ్రతం', eventDesc2: 'స్వామివారి ఆశీస్సులతో మా గృహ వేడుక.',
    time3: 'మధ్యాహ్నం 12:30', eventType3: 'విందు', event3: 'మధ్యాహ్న భోజనం', eventDesc3: 'కార్యక్రమం అనంతరం భోజనానికి విచ్చేయండి.',
    venueKicker: 'మీ రాక కోసం ఎదురుచూస్తున్నాము', venueTitle: 'వేదిక', address: addressTelugu,
    openDirections: 'దారి చూపించండి', copyAddress: 'చిరునామా కాపీ చేయండి', mapNote: 'క్రింది మ్యాప్‌లో స్థలాన్ని చూడవచ్చు.',
    viewMap: 'గూగుల్ మ్యాప్స్‌లో చూడండి', closingTitle: 'మీ రాకే మా ఆనందం',
    closingText: 'మా నూతన గృహప్రవేశ మహోత్సవానికి విచ్చేసి, మమ్మల్ని ఆశీర్వదించవలసిందిగా ఆహ్వానిస్తున్నాము.',
    originalLink: 'అసలు ఆహ్వాన పత్రిక', share: 'ఆహ్వానాన్ని పంచుకోండి',
    footerDate: '20 నవంబర్ 2026 • తెనాలి', footerLove: 'మీ రాక కోసం ఎదురుచూస్తున్నాము',
    copied: 'చిరునామా కాపీ అయింది', shareCopied: 'లింక్ కాపీ అయింది'
  },
  en: {
    skip: 'Skip to main content', brand: 'A warm invitation', directionsShort: 'Get directions',
    eyebrow: 'A new home, a new beginning', heroTitle: 'Housewarming Invitation',
    heroLede: 'You and your family are warmly invited to celebrate the beginning of our new home and bless us with your presence.',
    month: 'November 2026', weekday: 'Friday • Tenali', viewSchedule: 'View the schedule',
    getDirections: 'Get directions', seeOriginal: 'View original invitation ↗',
    scheduleKicker: 'Friday • 20 November 2026', scheduleTitle: 'The celebrations',
    scheduleIntro: 'We would be delighted to have you with us for each part of the day.',
    time1: '9:45 AM', eventType1: 'First ceremony', event1: 'Griha Pravesham', eventDesc1: 'An auspicious beginning in our new home.',
    time2: '11:00 AM', eventType2: 'Prayer ceremony', event2: 'Sri Satyanarayana Swamy Vratam', eventDesc2: 'A prayer ceremony for blessings in our new home.',
    time3: '12:30 PM', eventType3: 'Lunch', event3: 'Lunch', eventDesc3: 'Please join us for lunch after the ceremony.',
    venueKicker: 'We look forward to seeing you', venueTitle: 'The venue', address: addressEnglish,
    openDirections: 'Get directions', copyAddress: 'Copy address', mapNote: 'You can preview the location on the map.',
    viewMap: 'View on Google Maps', closingTitle: 'Your presence is our joy',
    closingText: 'Please join us for our housewarming celebration and bless our new home.',
    originalLink: 'Original invitation', share: 'Share invitation',
    footerDate: '20 November 2026 • Tenali', footerLove: 'We look forward to seeing you',
    copied: 'Address copied', shareCopied: 'Link copied'
  }
};

const announcement = document.getElementById('announcement');
let currentLanguage = 'te';

function say(message) {
  announcement.textContent = '';
  window.setTimeout(() => { announcement.textContent = message; }, 10);
}

function setLanguage(language) {
  if (!copy[language]) return;
  currentLanguage = language;
  document.documentElement.lang = language;
  document.body.dataset.lang = language;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const value = copy[language][element.dataset.i18n];
    if (value !== undefined) element.textContent = value;
  });
  document.querySelectorAll('.language-switch button').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.lang === language));
  });
  document.title = language === 'te' ? 'గృహప్రవేశ ఆహ్వానం | 20 నవంబర్ 2026' : 'Housewarming Invitation | 20 November 2026';
  try { localStorage.setItem('housewarming-language', language); } catch (_) { /* Storage can be disabled. */ }
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const field = document.createElement('textarea');
  field.value = text;
  field.style.position = 'fixed';
  field.style.opacity = '0';
  document.body.appendChild(field);
  field.select();
  document.execCommand('copy');
  field.remove();
}

document.querySelectorAll('.language-switch button').forEach(button => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

document.getElementById('copy-address').addEventListener('click', async () => {
  try {
    await copyText(currentLanguage === 'te' ? addressTelugu.replaceAll('\n', ' ') : addressEnglish);
    say(copy[currentLanguage].copied);
  } catch (_) {
    say(currentLanguage === 'te' ? 'కాపీ చేయలేకపోయాము' : 'Could not copy the address');
  }
});

document.getElementById('share-page').addEventListener('click', async () => {
  try {
    if (navigator.share) {
      await navigator.share({ title: document.title, text: copy[currentLanguage].heroLede, url: location.href });
    } else {
      await copyText(location.href);
      say(copy[currentLanguage].shareCopied);
    }
  } catch (error) {
    if (error.name !== 'AbortError') say(currentLanguage === 'te' ? 'పంచుకోలేకపోయాము' : 'Could not share the link');
  }
});

let savedLanguage = 'te';
try { savedLanguage = localStorage.getItem('housewarming-language') || 'te'; } catch (_) { /* Use Telugu default. */ }
setLanguage(copy[savedLanguage] ? savedLanguage : 'te');

