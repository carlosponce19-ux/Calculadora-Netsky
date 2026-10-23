const tarifasPorZona = {
  'Fibra Urbana': {
    Profesional: { internet: 13990, internetTv: 26990, futbol: 37990, plus: 38990, cine: 43990 },
    Avanzado: { internet: 16990, internetTv: 29990, futbol: 40990, plus: 41990, cine: 46990 },
    Full: { internet: 19990, internetTv: 33990, futbol: 44990, plus: 45990, cine: 50990 },
    Premium: { internet: 23990, internetTv: 36990, futbol: 47990, plus: 48990, cine: 53990 },
  },
  'Fibra Rural': {
    Profesional: { internet: 23990, internetTv: 36990, futbol: 47990, plus: 48990, cine: 53990 },
    Avanzado: { internet: 26990, internetTv: 39990, futbol: 50990, plus: 51990, cine: 56990 },
    Full: { internet: 29990, internetTv: 43990, futbol: 54990, plus: 55990, cine: 60990 },
    Premium: { internet: 33990, internetTv: 46990, futbol: 57990, plus: 58990, cine: 63990 },
  },
  'Antena Rural': {
    Profesional: { internet: 23990, internetTv: 36990, futbol: 47990, plus: 48990, cine: 53990 },
    Avanzado: { internet: 26990, internetTv: 39990, futbol: 50990, plus: 51990, cine: 56990 },
    Full: { internet: 29990, internetTv: 43990, futbol: 54990, plus: 55990, cine: 60990 },
    Premium: { internet: 33990, internetTv: 46990, futbol: 57990, plus: 58990, cine: 63990 },
  },
  'Antena Urbana': {
    Profesional: { internet: 16990, internetTv: 29990, futbol: 40990, plus: 41990, cine: 46990 },
    Avanzado: { internet: 19990, internetTv: 32990, futbol: 43990, plus: 44990, cine: 49990 },
    Full: { internet: 23990, internetTv: 36990, futbol: 47990, plus: 48990, cine: 53990 },
    Premium: { internet: 26990, internetTv: 39990, futbol: 50990, plus: 51990, cine: 56990 },
  },
  'Antena Suburbana': {
    Profesional: { internet: 19990, internetTv: 32990, futbol: 43990, plus: 44990, cine: 49990 },
    Avanzado: { internet: 23990, internetTv: 36990, futbol: 47990, plus: 48990, cine: 53990 },
    Full: { internet: 26990, internetTv: 39990, futbol: 50990, plus: 51990, cine: 56990 },
    Premium: { internet: 29990, internetTv: 42990, futbol: 53990, plus: 54990, cine: 59990 },
    Elite: { internet: 33990, internetTv: 46990, futbol: 57990, plus: 58990, cine: 63990 },
  },
  'Fibra Cayurruca': {
    Profesional: { internet: 19990, internetTv: 32990, futbol: 43990, plus: 44990, cine: 49990 },
    Avanzado: { internet: 23990, internetTv: 36990, futbol: 47990, plus: 48990, cine: 53990 },
    Full: { internet: 26990, internetTv: 39990, futbol: 50990, plus: 51990, cine: 56990 },
    Premium: { internet: 29990, internetTv: 42990, futbol: 53990, plus: 54990, cine: 59990 },
  },
};

const promocionesPorZona = {
  'Fibra Urbana': {
    Profesional: { internetTv: 9990, futbol: 28990, plus: 29990, cine: 34990 },
    Avanzado: { internetTv: 13990, futbol: 30990, plus: 31990, cine: 36990 },
    Full: { internetTv: 16990, futbol: 34990, plus: 35990, cine: 40990 },
    Premium: { internetTv: 19990, futbol: 36990, plus: 37990, cine: 42990 },
  },
};

const promocionesRioBuenoInternet = { Profesional: 7990, Avanzado: 9990, Full: 13990, Premium: 16990 };
const tarifasRioBuenoInternet = { Profesional: 9990, Avanzado: 13990, Full: 16990, Premium: 19990 };
const instalaciones = {
  Futrono: 4990,
  Nontuela: 4990,
  Llifen: 4990,
  'El Llolly': 4990,
  Pichirropulli: 4990,
  'Puerto Nuevo': 4990,
  'Lago Ranco': 14990,
  'Rio Bueno': 14990,
  Coñaripe: 23990,
  'Entre Lagos': 23990,
  Cayurruca: 23990,
  Itropulli: 23990,
};
const tecnicos = [
  'Juan Carlos Troncoso',
  'Felipe Ojeda Lobos',
  'Rodrigo Caro Obando',
];

const valorDeco = 29990;
const tarifasCableRed = { cat6: 980, drop: 1490 };
const nombresCableRed = { cat6: 'CAT6', drop: 'drop por conduit' };
const velocidadesFibra = {
  Profesional: { bajada: 200, subida: 200 },
  Avanzado: { bajada: 250, subida: 250 },
  Full: { bajada: 300, subida: 300 },
  Premium: { bajada: 350, subida: 350 },
};
const zonasPorLocalidad = {
  Futrono: ['Fibra Urbana', 'Antena Rural', 'Antena Urbana'],
  Nontuela: ['Fibra Urbana'],
  'Lago Ranco': ['Fibra Urbana', 'Antena Rural', 'Antena Urbana'],
  'El Llolly': ['Fibra Urbana'],
  Coñaripe: ['Fibra Urbana'],
  'Entre Lagos': ['Fibra Urbana'],
  Llifen: ['Fibra Rural'],
  Itropulli: ['Fibra Rural', 'Antena Rural', 'Antena Urbana'],
  'Rio Bueno': ['Fibra Urbana'],
};
const nombresPaquete = {
  internet: 'Solo Internet',
  internetTv: 'Internet + TV',
  futbol: 'Internet + Fútbol',
  plus: 'Internet + Plus',
  cine: 'Internet + Cine',
};
const moneda = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 });
const quoteForm = document.querySelector('#quote-form');
const decoderCount = document.querySelector('#decoder-count');
const quotePreview = document.querySelector('#quote-preview');
const feedback = document.querySelector('#feedback');
const locationButton = document.querySelector('#location-button');
const locationStatus = document.querySelector('#location-status');
const zoneSelect = document.querySelector('#zona');
const technologySelect = document.querySelector('#tecnologia');
const planSelect = document.querySelector('#plan');
const planSpeed = document.querySelector('#plan-speed');
const localitySelect = document.querySelector('#localidad');
const installationInstallmentsSelect = document.querySelector('#installation-installments');
const installationInstallmentsHint = document.querySelector('#installation-installments-hint');
const installationDateInput = document.querySelector('#installation-date');
const expansionRequestedInput = document.querySelector('#expansion-requested');
const expansionMetersField = document.querySelector('#expansion-meters-field');
const expansionMetersInput = document.querySelector('#expansion-meters');
const expansionCableTypeInput = document.querySelector('#expansion-cable-type');
const expansionRateHint = document.querySelector('#expansion-rate-hint');
let decoderQuantity = 0;
let cotizacionActual;
let ubicacionActual;

const today = new Date();
installationDateInput.value = [today.getFullYear(), String(today.getMonth() + 1).padStart(2, '0'), String(today.getDate()).padStart(2, '0')].join('-');

locationButton.addEventListener('click', () => {
  ubicacionActual = undefined;
  if (!navigator.geolocation) {
    locationStatus.textContent = 'Este navegador no permite obtener la ubicación.';
    locationStatus.hidden = false;
    return;
  }

  locationButton.disabled = true;
  locationStatus.textContent = 'Obteniendo ubicación...';
  locationStatus.hidden = false;
  navigator.geolocation.getCurrentPosition(({ coords }) => {
    const latitude = coords.latitude;
    const longitude = coords.longitude;
    ubicacionActual = {
      latitude,
      longitude,
      mapsUrl: `https://maps.google.com/?q=${latitude},${longitude}`,
    };
    locationStatus.textContent = `Ubicación agregada: ${latitude.toFixed(5)}, ${longitude.toFixed(5)}`;
    locationButton.disabled = false;
  }, (error) => {
    locationStatus.textContent = error.code === 1
      ? 'Permite el acceso a la ubicación para compartirla.'
      : error.code === 3
        ? 'Se agotó el tiempo para obtener la ubicación. Inténtalo nuevamente.'
        : 'No se pudo obtener la ubicación. Revisa la señal GPS e inténtalo nuevamente.';
    locationButton.disabled = false;
  }, { enableHighAccuracy: true, timeout: 15000, maximumAge: 30000 });
});

function addOptions(select, options, formatLabel = (value) => value) {
  Object.keys(options).forEach((value) => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = formatLabel(value);
    select.append(option);
  });
}

addOptions(document.querySelector('#paquete'), nombresPaquete, (value) => nombresPaquete[value]);
addOptions(localitySelect, instalaciones, (value) => value === 'Rio Bueno' ? 'Río Bueno' : value);
document.querySelectorAll('#survey-technician-input').forEach((select) => {
  tecnicos.forEach((technician) => {
    const option = document.createElement('option');
    option.value = technician;
    option.textContent = technician;
    select.append(option);
  });
});

function refreshZones(zones, selectedZone = '') {
  const technology = technologySelect.value;
  const matchingZones = zones.filter((zone) => zone.startsWith(technology));
  const zonePlaceholder = zoneSelect.querySelector('option[value=""]');
  zoneSelect.replaceChildren(zonePlaceholder);
  addOptions(zoneSelect, Object.fromEntries(matchingZones.map((zone) => [zone, true])));
  zoneSelect.value = matchingZones.includes(selectedZone) ? selectedZone : matchingZones[0] || '';
}

function refreshTechnologyOptions() {
  const localityZones = zonasPorLocalidad[localitySelect.value] || Object.keys(tarifasPorZona);
  const availableTechnologies = new Set(localityZones.map((zone) => zone.startsWith('Antena') ? 'Antena' : 'Fibra'));
  [...technologySelect.options].forEach((option) => {
    if (option.value) option.disabled = !availableTechnologies.has(option.value);
  });

  if (!availableTechnologies.has(technologySelect.value)) {
    technologySelect.value = availableTechnologies.has('Fibra') ? 'Fibra' : 'Antena';
  }
}

function refreshPlans() {
  const planPlaceholder = planSelect.querySelector('option[value=""]');
  planSelect.replaceChildren(planPlaceholder);
  if (zoneSelect.value) addOptions(planSelect, tarifasPorZona[zoneSelect.value]);
  updatePlanSpeed();
}

function updatePlanSpeed() {
  const speed = technologySelect.value === 'Fibra' ? velocidadesFibra[planSelect.value] : undefined;
  planSpeed.hidden = !speed;
  planSpeed.textContent = speed ? `Bajada ${speed.bajada} Mbps · Subida ${speed.subida} Mbps` : '';
}

function updateInstallationInstallments() {
  const fixedInstallment = instalaciones[localitySelect.value] === 4990;
  installationInstallmentsSelect.disabled = fixedInstallment;
  installationInstallmentsHint.hidden = !fixedInstallment;
  if (fixedInstallment) installationInstallmentsSelect.value = '1';
}

technologySelect.addEventListener('change', () => {
  const availableZones = zonasPorLocalidad[localitySelect.value] || Object.keys(tarifasPorZona);
  refreshZones(availableZones);
  refreshPlans();
});
zoneSelect.addEventListener('change', refreshPlans);
planSelect.addEventListener('change', updatePlanSpeed);
localitySelect.addEventListener('change', () => {
  refreshTechnologyOptions();
  updateInstallationInstallments();
  const availableZones = zonasPorLocalidad[localitySelect.value] || Object.keys(tarifasPorZona);
  refreshZones(availableZones);
  refreshPlans();
});
updateInstallationInstallments();

function setDecoderQuantity(quantity) {
  decoderQuantity = Math.max(0, quantity);
  decoderCount.value = decoderQuantity;
  decoderCount.textContent = decoderQuantity;
}

document.querySelector('#decoder-minus').addEventListener('click', () => setDecoderQuantity(decoderQuantity - 1));
document.querySelector('#decoder-plus').addEventListener('click', () => setDecoderQuantity(decoderQuantity + 1));
expansionRequestedInput.addEventListener('change', () => {
  expansionMetersField.hidden = !expansionRequestedInput.checked;
  expansionMetersInput.required = expansionRequestedInput.checked;
  expansionCableTypeInput.required = expansionRequestedInput.checked;
  if (!expansionRequestedInput.checked) expansionMetersInput.value = '';
});
expansionCableTypeInput.addEventListener('change', () => {
  const cableType = expansionCableTypeInput.value;
  expansionRateHint.textContent = `${nombresCableRed[cableType]}: ${moneda.format(tarifasCableRed[cableType])} por metro. Factibilidad sujeta a evaluación.`;
});

function calculateQuote() {
  if (!quoteForm.reportValidity()) return false;

  const formData = new FormData(quoteForm);
  const expansionRequested = expansionRequestedInput.checked;
  const expansionMeters = expansionRequested ? Number(formData.get('expansionMeters')) : 0;
  const expansionCableType = expansionRequested ? formData.get('expansionCableType') : '';
  const expansionMeterPrice = expansionRequested ? tarifasCableRed[expansionCableType] : 0;
  const totalExpansionRed = expansionMeters * expansionMeterPrice;
  const technology = technologySelect.value;
  const zone = zoneSelect.value;
  const plan = formData.get('plan');
  const packageKey = formData.get('paquete');
  const locality = formData.get('localidad');
  const installationDate = new Date(`${formData.get('installationDate')}T00:00:00`);
  const esInternetRioBueno = locality === 'Rio Bueno' && zone === 'Fibra Urbana' && packageKey === 'internet';
  const velocidad = technology === 'Fibra' ? velocidadesFibra[plan] : undefined;
  const mensualidad = esInternetRioBueno ? tarifasRioBuenoInternet[plan] : tarifasPorZona[zone]?.[plan]?.[packageKey];
  const promocion = esInternetRioBueno ? promocionesRioBuenoInternet[plan] : promocionesPorZona[zone]?.[plan]?.[packageKey];
  const instalacion = instalaciones[locality];

  if (mensualidad === undefined || instalacion === undefined) {
    feedback.textContent = 'No se pudo encontrar el precio para esa combinación.';
    feedback.hidden = false;
    return false;
  }

  const diasDelMes = new Date(installationDate.getFullYear(), installationDate.getMonth() + 1, 0).getDate();
  const diasProporcionales = diasDelMes - installationDate.getDate() + 1;
  const cargoProporcional = Math.round(mensualidad * diasProporcionales / diasDelMes);
  const cuotasInstalacion = instalacion === 4990 ? 1 : Number(installationInstallmentsSelect.value);
  const montoBaseCuota = Math.floor(instalacion / cuotasInstalacion);
  const restoCuotas = instalacion % cuotasInstalacion;
  const montosCuotasInstalacion = Array.from(
    { length: cuotasInstalacion },
    (_, index) => montoBaseCuota + (index < restoCuotas ? 1 : 0),
  );
  const totalDecodificadores = decoderQuantity * valorDeco;
  cotizacionActual = {
    clientName: formData.get('clientName').trim(),
    phone: formData.get('phone').trim(),
    technician: formData.get('technician').trim(),
    address: formData.get('address').trim(),
    ubicacion: ubicacionActual,
    installationDate,
    diasProporcionales,
    diasDelMes,
    cargoProporcional,
    service: formData.get('service').trim(),
    expansionRequested,
    expansionMeters,
    expansionCableType,
    expansionMeterPrice,
    totalExpansionRed,
    technology,
    zone,
    plan,
    velocidad,
    packageName: nombresPaquete[packageKey],
    locality: locality === 'Rio Bueno' ? 'Río Bueno' : locality,
    decoderQuantity,
    mensualidad,
    mensualidadPromocional: promocion,
    instalacion,
    cuotasInstalacion,
    montosCuotasInstalacion,
    totalDecodificadores,
    totalInicial: cargoProporcional + montosCuotasInstalacion[0] + totalDecodificadores + totalExpansionRed,
  };

  const details = [
    ['Cliente', cotizacionActual.clientName],
    ['Teléfono', cotizacionActual.phone],
    ['Dirección', cotizacionActual.address],
    ...(cotizacionActual.ubicacion
      ? [['Coordenadas GPS', `${cotizacionActual.ubicacion.latitude.toFixed(5)}, ${cotizacionActual.ubicacion.longitude.toFixed(5)}`]]
      : []),
    ['Fecha de instalación', new Intl.DateTimeFormat('es-CL', { dateStyle: 'long' }).format(installationDate)],
    ...(cotizacionActual.service ? [['Servicio', cotizacionActual.service]] : []),
    ['Tipo de conexión', cotizacionActual.technology],
    ['Zona tarifaria', cotizacionActual.zone],
    ['Plan', cotizacionActual.plan],
    ...(cotizacionActual.velocidad ? [['Velocidad', `${cotizacionActual.velocidad.bajada}/${cotizacionActual.velocidad.subida} Mbps (bajada/subida)`]] : []),
    ['Paquete', cotizacionActual.packageName],
    ['Localidad', cotizacionActual.locality],
    ['Decodificadores', String(cotizacionActual.decoderQuantity)],
    ...(cotizacionActual.expansionRequested
      ? [['Ampliación de red', `${cotizacionActual.expansionMeters} m de cable ${nombresCableRed[cotizacionActual.expansionCableType]} · ${moneda.format(cotizacionActual.expansionMeterPrice)}/m`]]
      : []),
  ];
  const quoteDetails = document.querySelector('#quote-details');
  quoteDetails.replaceChildren(...details.map(([label, value]) => {
    const item = document.createElement('div');
    const term = document.createElement('dt');
    const description = document.createElement('dd');
    term.textContent = label;
    description.textContent = value;
    item.append(term, description);
    return item;
  }));

  document.querySelector('#quote-date').textContent = new Intl.DateTimeFormat('es-CL', { dateStyle: 'long' }).format(new Date());
  document.querySelector('#proration-label').textContent = `Cargo proporcional sin descuento (${diasProporcionales} de ${diasDelMes} días)`;
  document.querySelector('#proration-total').textContent = moneda.format(cargoProporcional);
  document.querySelector('#promo-row').hidden = promocion === undefined;
  document.querySelector('#promo-monthly').textContent = promocion === undefined ? '' : moneda.format(promocion);
  document.querySelector('#mensualidad-label').textContent = promocion === undefined
    ? 'Mensualidad completa'
    : 'Mensualidad desde el 3er mes completo';
  document.querySelector('#mensualidad').textContent = moneda.format(mensualidad);
  document.querySelector('#installation-label').textContent = cuotasInstalacion === 1
    ? 'Instalación (1 cuota)'
    : 'Instalación (cuota 1 de 3)';
  document.querySelector('#installation-total').textContent = moneda.format(montosCuotasInstalacion[0]);
  document.querySelector('#installation-full-row').hidden = cuotasInstalacion === 1;
  document.querySelector('#installation-full-total').textContent = moneda.format(instalacion);
  document.querySelector('#installation-remaining-row').hidden = cuotasInstalacion === 1;
  document.querySelector('#installation-remaining-total').textContent = montosCuotasInstalacion.slice(1).map((amount) => moneda.format(amount)).join(' y ');
  document.querySelector('#expansion-total-row').hidden = !cotizacionActual.expansionRequested;
  document.querySelector('#expansion-total-label').textContent = `${expansionMeters} m de cable ${nombresCableRed[expansionCableType]} × ${moneda.format(expansionMeterPrice)}/m`;
  document.querySelector('#expansion-total').textContent = moneda.format(totalExpansionRed);
  document.querySelector('#decoder-total').textContent = moneda.format(totalDecodificadores);
  document.querySelector('#total').textContent = moneda.format(cotizacionActual.totalInicial);
  quotePreview.hidden = false;
  feedback.hidden = true;
  return true;
}

quoteForm.addEventListener('submit', (event) => {
  event.preventDefault();
  calculateQuote();
});

document.querySelector('#pdf-button').addEventListener('click', () => {
  if (!calculateQuote()) return;
  if (!window.jspdf?.jsPDF) {
    feedback.textContent = 'No se pudo cargar el generador PDF. Comprueba tu conexión a internet.';
    feedback.hidden = false;
    return;
  }

  try {
    const quote = cotizacionActual;
    const pdf = new window.jspdf.jsPDF({ unit: 'mm', format: 'letter', orientation: 'portrait', compress: true });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const margin = 14;
    const rightEdge = pageWidth - margin;
    const labelX = margin;
    const valueX = 76;
    const valueWidth = rightEdge - valueX;
    let cursorY = 20;

    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(23);
    pdf.setTextColor(48, 53, 58);
    pdf.text('NET', margin, cursorY);
    pdf.setDrawColor(123, 201, 67);
    pdf.setLineWidth(1.2);
    pdf.circle(margin + 29, cursorY - 3, 5, 'S');
    pdf.circle(margin + 29, cursorY - 3, 2.8, 'S');
    pdf.setFillColor(123, 201, 67);
    pdf.circle(margin + 29, cursorY - 3, 0.9, 'F');
    pdf.setTextColor(53, 169, 232);
    pdf.text('SKY', margin + 37, cursorY);
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(8);
    pdf.setTextColor(48, 53, 58);
    pdf.text('PROVEEDORES DE INTERNET', margin, cursorY + 6);
    pdf.setTextColor(129, 132, 135);
    pdf.text(new Intl.DateTimeFormat('es-CL', { dateStyle: 'long' }).format(new Date()), rightEdge, cursorY + 6, { align: 'right' });

    cursorY += 18;
    pdf.setDrawColor(230, 225, 216);
    pdf.setLineWidth(0.4);
    pdf.line(margin, cursorY, rightEdge, cursorY);
    cursorY += 8;
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(13);
    pdf.setTextColor(48, 53, 58);
    pdf.text('SOLICITUD DE SERVICIO', margin, cursorY);
    cursorY += 8;

    const addLine = (label, value, { emphasized = false, valueColor = [48, 53, 58], url } = {}) => {
      const labelLines = pdf.splitTextToSize(label, valueX - labelX - 5);
      const valueLines = pdf.splitTextToSize(String(value), valueWidth);
      const lineCount = Math.max(labelLines.length, valueLines.length);
      const lineHeight = emphasized ? 5 : 4.2;
      pdf.setFont('helvetica', emphasized ? 'bold' : 'normal');
      pdf.setFontSize(emphasized ? 10 : 8.5);
      pdf.setTextColor(129, 132, 135);
      pdf.text(labelLines, labelX, cursorY);
      pdf.setTextColor(...valueColor);
      pdf.text(valueLines, valueX, cursorY);
      if (url) pdf.link(valueX, cursorY - 3, valueWidth, lineCount * lineHeight, { url });
      cursorY += lineCount * lineHeight + (emphasized ? 2 : 1.2);
    };

    const formatDate = (date) => new Intl.DateTimeFormat('es-CL', { dateStyle: 'long' }).format(date);
    const details = [
      ['Cliente', quote.clientName],
      ['Teléfono', quote.phone],
      ['Dirección', quote.address],
      ...(quote.ubicacion
        ? [['Ubicación GPS', `${quote.ubicacion.latitude.toFixed(5)}, ${quote.ubicacion.longitude.toFixed(5)}`, quote.ubicacion.mapsUrl]]
        : []),
      ['Fecha de instalación', formatDate(quote.installationDate)],
      ...(quote.service ? [['Referencia', quote.service]] : []),
      ['Localidad', quote.locality],
      ['Conexión', `${quote.technology} · ${quote.zone}`],
      ['Plan y paquete', `${quote.plan} · ${quote.packageName}`],
      ...(quote.velocidad ? [['Velocidad', `${quote.velocidad.bajada}/${quote.velocidad.subida} Mbps (bajada/subida)`]] : []),
      ['Decodificadores', String(quote.decoderQuantity)],
      ...(quote.expansionRequested
        ? [['Ampliación', `${quote.expansionMeters} m de cable ${nombresCableRed[quote.expansionCableType]}`]]
        : []),
    ];
    details.forEach(([label, value, url]) => addLine(label, value, { url }));

    cursorY += 2;
    pdf.setDrawColor(230, 225, 216);
    pdf.line(margin, cursorY, rightEdge, cursorY);
    cursorY += 7;
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(10);
    pdf.setTextColor(48, 53, 58);
    pdf.text('DETALLE DE VALORES', margin, cursorY);
    cursorY += 7;

    addLine(`Cargo proporcional sin descuento (${quote.diasProporcionales}/${quote.diasDelMes} días)`, moneda.format(quote.cargoProporcional));
    if (quote.mensualidadPromocional !== undefined) {
      addLine('Mensualidad promocional · primeros 2 meses completos', moneda.format(quote.mensualidadPromocional));
    }
    addLine('Mensualidad completa', moneda.format(quote.mensualidad));
    addLine(`Instalación · cuota 1 de ${quote.cuotasInstalacion}`, moneda.format(quote.montosCuotasInstalacion[0]));
    if (quote.cuotasInstalacion === 3) {
      addLine('Instalación · costo total', moneda.format(quote.instalacion));
      addLine('Instalación · cuotas 2 y 3', quote.montosCuotasInstalacion.slice(1).map((amount) => moneda.format(amount)).join(' y '));
    }
    if (quote.expansionRequested) {
      addLine(`${quote.expansionMeters} m cable ${nombresCableRed[quote.expansionCableType]} · ${moneda.format(quote.expansionMeterPrice)}/m`, moneda.format(quote.totalExpansionRed));
    }
    addLine(`Decodificadores (${quote.decoderQuantity})`, moneda.format(quote.totalDecodificadores));

    cursorY += 2;
    pdf.setDrawColor(8, 159, 172);
    pdf.setLineWidth(0.6);
    pdf.line(margin, cursorY, rightEdge, cursorY);
    cursorY += 7;
    addLine('TOTAL INICIAL', moneda.format(quote.totalInicial), { emphasized: true, valueColor: [8, 127, 137] });

    cursorY += 2;
    const footnote = 'Valores en pesos chilenos. El primer mes se cobra proporcionalmente desde la fecha de instalación, sin descuento. Las promociones aplican únicamente a meses completos. La ampliación de red está sujeta a factibilidad.';
    const footnoteLines = pdf.splitTextToSize(footnote, rightEdge - margin);
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(7.5);
    pdf.setTextColor(129, 132, 135);
    pdf.text(footnoteLines, margin, cursorY);

    const safeName = quote.clientName.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-|-$/g, '').toLowerCase();
    pdf.save(`netsky-cotizacion-${safeName || 'cliente'}.pdf`);
  } catch {
    feedback.textContent = 'No se pudo generar el PDF. Comprueba tu conexión e inténtalo nuevamente.';
    feedback.hidden = false;
  }
});

document.querySelector('#whatsapp-button').addEventListener('click', () => {
  if (!calculateQuote()) return;

  const quote = cotizacionActual;
  const message = [
    'Hola, quiero solicitar la contratación de un servicio Netsky.',
    `Nombre: ${quote.clientName}`,
    `Teléfono de contacto: ${quote.phone}`,
    `Dirección de instalación: ${quote.address}`,
    ...(quote.ubicacion ? [`Ubicación del servicio: ${quote.ubicacion.mapsUrl}`] : []),
    `Fecha de instalación: ${new Intl.DateTimeFormat('es-CL', { dateStyle: 'long' }).format(quote.installationDate)}`,
    ...(quote.service ? [`Referencia: ${quote.service}`] : []),
    `Zona: ${quote.zone}`,
    `Tipo de conexión: ${quote.technology}`,
    `Plan ${quote.plan} - ${quote.packageName}`,
    ...(quote.velocidad ? [`Velocidad: ${quote.velocidad.bajada}/${quote.velocidad.subida} Mbps (bajada/subida)`] : []),
    `Localidad: ${quote.locality}`,
    ...(quote.expansionRequested
      ? [`${quote.expansionCableType === 'drop' ? 'Instalación de cable drop por conduit' : 'Cable CAT6'}: ${quote.expansionMeters} m × ${moneda.format(quote.expansionMeterPrice)}/m = ${moneda.format(quote.totalExpansionRed)}. Factibilidad sujeta a evaluación.`]
      : []),
    `Cargo proporcional sin descuento (${quote.diasProporcionales} de ${quote.diasDelMes} días): ${moneda.format(quote.cargoProporcional)}`,
    ...(quote.mensualidadPromocional === undefined ? [] : [`Mensualidad promocional por los primeros 2 meses completos: ${moneda.format(quote.mensualidadPromocional)}`]),
    `Mensualidad completa${quote.mensualidadPromocional === undefined ? '' : ' desde el 3er mes completo'}: ${moneda.format(quote.mensualidad)}`,
    `Instalación total (${quote.cuotasInstalacion} ${quote.cuotasInstalacion === 1 ? 'cuota' : 'cuotas'}): ${moneda.format(quote.instalacion)}`,
    `Pago inicial de instalación (cuota 1/${quote.cuotasInstalacion}): ${moneda.format(quote.montosCuotasInstalacion[0])}`,
    ...(quote.cuotasInstalacion === 3
      ? [`Cuotas 2 y 3 de instalación: ${quote.montosCuotasInstalacion.slice(1).map((amount) => moneda.format(amount)).join(' y ')}`]
      : []),
    `Decodificadores (${quote.decoderQuantity}): ${moneda.format(quote.totalDecodificadores)}`,
    `Total inicial: ${moneda.format(quote.totalInicial)}`,
  ].join('\n');
  window.open(`https://wa.me/56971419038?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});

const surveyView = document.querySelector('#survey-view');
const homeView = document.querySelector('#home-view');
const quoteApp = document.querySelector('#quote-app');
const surveyShareFeedback = document.querySelector('#survey-share-feedback');
const customerSurveyForm = document.querySelector('#customer-survey-form');
const surveyTechnicianInput = document.querySelector('#survey-technician-input');
const surveyTechnicianEntry = document.querySelector('#survey-technician-entry');
const surveyTechnicianDisplay = document.querySelector('#survey-technician');
const surveyTechnicianName = document.querySelector('#survey-technician-name');
const statsAuthFeedback = document.querySelector('#stats-auth-feedback');
const statsDataFeedback = document.querySelector('#stats-data-feedback');
const statsLogin = document.querySelector('#stats-login');
const statsDashboard = document.querySelector('#stats-dashboard');
const companyEmail = 'ventas01netsky@gmail.com';
const evaluationSubmissionId = crypto.randomUUID();
const supabaseConfig = window.NETSKY_SUPABASE_CONFIG;
const supabaseClient = window.supabase?.createClient
  && supabaseConfig?.url
  && supabaseConfig?.anonKey
  ? window.supabase.createClient(supabaseConfig.url, supabaseConfig.anonKey)
  : undefined;

function showHome() {
  homeView.hidden = false;
  quoteApp.hidden = true;
  surveyView.hidden = true;
  document.title = 'Netsky · Cotizador y evaluación';
}

document.querySelector('#go-to-quote').addEventListener('click', () => {
  homeView.hidden = true;
  quoteApp.hidden = false;
  surveyView.hidden = true;
});
document.querySelector('#go-to-survey').addEventListener('click', () => {
  homeView.hidden = true;
  quoteApp.hidden = true;
  surveyView.hidden = false;
  surveyTechnicianInput.focus();
});
document.querySelectorAll('.return-home').forEach((button) => button.addEventListener('click', showHome));

customerSurveyForm.querySelectorAll('select').forEach((select) => {
  for (let score = 1; score <= 7; score += 1) {
    const option = document.createElement('option');
    option.value = String(score);
    option.textContent = String(score);
    select.append(option);
  }
});

function normalizeChileanMobile(phone) {
  const digits = phone.replace(/\D/g, '');
  if (/^9\d{8}$/.test(digits)) return `56${digits}`;
  if (/^569\d{8}$/.test(digits)) return digits;
  return '';
}

document.querySelector('#survey-whatsapp-button').addEventListener('click', () => {
  if (!calculateQuote()) return;

  const quote = cotizacionActual;
  if (!tecnicos.includes(quote.technician)) {
    surveyShareFeedback.textContent = 'Ingresa el nombre de un técnico disponible para crear la encuesta.';
    surveyShareFeedback.hidden = false;
    return;
  }

  const clientMobile = normalizeChileanMobile(quote.phone);
  if (!clientMobile) {
    surveyShareFeedback.textContent = 'Ingresa un celular chileno válido con 9 dígitos para enviar la encuesta por WhatsApp.';
    surveyShareFeedback.hidden = false;
    return;
  }

  if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost') {
    surveyShareFeedback.textContent = 'Publica la aplicación en una dirección HTTPS para crear un enlace de encuesta que el cliente pueda abrir.';
    surveyShareFeedback.hidden = false;
    return;
  }

  const surveyUrl = new URL(window.location.href);
  surveyUrl.search = '';
  surveyUrl.hash = '';
  surveyUrl.searchParams.set('encuesta', '1');
  surveyUrl.searchParams.set('tecnico', quote.technician);
  const message = [
    `Hola ${quote.clientName}, gracias por elegir Netsky.`,
    'Cuando termine la instalación, ¿nos ayudas respondiendo esta breve encuesta sobre la atención recibida?',
    surveyUrl.toString(),
  ].join('\n\n');
  surveyShareFeedback.hidden = true;
  window.open(`https://wa.me/${clientMobile}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});

const surveyParameters = new URLSearchParams(window.location.search);
if (surveyParameters.has('encuesta')) {
  homeView.hidden = true;
  quoteApp.hidden = true;
  surveyView.hidden = false;
  document.title = 'Evaluación de instalación · Netsky';
  document.querySelector('.topbar-label').textContent = 'NETSKY · EVALUACIÓN DE INSTALACIÓN';
  const technician = tecnicos.find((name) => name.toLocaleLowerCase('es-CL')
    === surveyParameters.get('tecnico')?.replace(/\s+/g, ' ').trim().toLocaleLowerCase('es-CL'));
  if (surveyParameters.has('tecnico') && !technician) {
    document.querySelector('#survey-invalid').hidden = false;
    customerSurveyForm.hidden = true;
    surveyTechnicianEntry.hidden = true;
  } else if (technician) {
    surveyTechnicianInput.value = technician;
    surveyTechnicianInput.required = false;
    surveyTechnicianInput.hidden = true;
    surveyTechnicianEntry.hidden = true;
    surveyTechnicianName.textContent = technician;
    surveyTechnicianDisplay.hidden = false;
  }
}

customerSurveyForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const technician = surveyTechnicianInput.value.replace(/\s+/g, ' ').trim();
  surveyTechnicianInput.setCustomValidity(surveyTechnicianInput.required && !technician
    ? 'Selecciona el nombre del técnico.'
    : '');
  if (!customerSurveyForm.reportValidity()) return;

  if (!supabaseClient) {
    document.querySelector('#survey-submit-feedback').textContent = 'La encuesta aún no está configurada. Netsky debe activar el servicio de evaluaciones para recibir respuestas.';
    document.querySelector('#survey-submit-feedback').hidden = false;
    return;
  }
  const answers = new FormData(customerSurveyForm);
  const feedback = document.querySelector('#survey-submit-feedback');
  const submitButton = customerSurveyForm.querySelector('[type="submit"]');
  submitButton.disabled = true;
  submitButton.textContent = 'Enviando evaluación...';
  feedback.hidden = true;

  try {
    const response = await fetch(`${supabaseConfig.url}/functions/v1/submit-evaluation`, {
      method: 'POST',
      headers: {
        apikey: supabaseConfig.anonKey,
        Authorization: `Bearer ${supabaseConfig.anonKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        submission_id: evaluationSubmissionId,
        technician,
        punctuality: Number(answers.get('punctuality')),
        clarity: Number(answers.get('clarity')),
        cleanliness: Number(answers.get('cleanliness')),
        questions: Number(answers.get('questions')),
        kindness: Number(answers.get('kindness')),
        recommendation: Number(answers.get('recommendation')),
        comment: answers.get('comment').trim(),
      }),
    });
    const result = await response.json();
    if (!response.ok || !result.success) {
      throw new Error(result.error || 'No se pudo enviar la evaluación.');
    }

    customerSurveyForm.querySelectorAll('input, select, textarea, button').forEach((control) => {
      control.disabled = true;
    });
    feedback.textContent = `Gracias. Tu evaluación fue enviada a Netsky${result.email_sent ? ' y registrada correctamente.' : '.'}`;
    feedback.classList.remove('feedback-error');
    feedback.classList.add('feedback-success');
    feedback.hidden = false;
  } catch (error) {
    console.error('Could not submit technician evaluation:', error);
    feedback.textContent = error instanceof Error
      ? error.message
      : 'No se pudo enviar la evaluación. Inténtalo nuevamente.';
    feedback.classList.remove('feedback-success');
    feedback.classList.add('feedback-error');
    feedback.hidden = false;
    submitButton.disabled = false;
    submitButton.textContent = 'Reintentar envío';
  }
});

function addStatsCell(row, value, header = false) {
  const cell = document.createElement(header ? 'th' : 'td');
  if (header) cell.scope = 'row';
  cell.textContent = value;
  row.append(cell);
}

async function loadTechnicianStats() {
  const statsTable = document.querySelector('#technician-stats-table');
  const statsBody = document.querySelector('#technician-stats-body');
  statsTable.hidden = true;
  statsBody.replaceChildren();
  statsDataFeedback.textContent = 'Cargando estadísticas...';

  const ratings = [];
  for (let offset = 0; ; offset += 1000) {
    const { data, error } = await supabaseClient
      .from('technician_ratings')
      .select('technician,punctuality,clarity,cleanliness,questions,kindness,recommendation,created_at')
      .order('created_at', { ascending: false })
      .range(offset, offset + 999);
    if (error) {
      statsDataFeedback.textContent = 'No se pudieron cargar las estadísticas. Revisa la conexión y los permisos de la cuenta.';
      console.error('Could not load technician statistics:', error.message);
      return;
    }
    ratings.push(...data);
    if (data.length < 1000) break;
  }

  const grouped = new Map();
  ratings.forEach((rating) => {
    if (!grouped.has(rating.technician)) grouped.set(rating.technician, []);
    grouped.get(rating.technician).push(rating);
  });
  const fields = ['punctuality', 'clarity', 'cleanliness', 'questions', 'kindness', 'recommendation'];
  const rows = [...grouped.entries()]
    .sort(([first], [second]) => first.localeCompare(second, 'es'))
    .map(([technician, technicianRatings]) => {
      const row = document.createElement('tr');
      addStatsCell(row, technician, true);
      addStatsCell(row, String(technicianRatings.length));
      fields.forEach((field) => {
        const fieldAverage = technicianRatings.reduce((sum, rating) => sum + rating[field], 0) / technicianRatings.length;
        addStatsCell(row, `${fieldAverage.toFixed(2)} / 7`);
      });
      const overall = technicianRatings.reduce((sum, rating) =>
        sum + fields.reduce((ratingSum, field) => ratingSum + rating[field], 0), 0)
        / (technicianRatings.length * fields.length);
      addStatsCell(row, `${overall.toFixed(2)} / 7`);
      return row;
    });

  statsBody.replaceChildren(...rows);
  statsTable.hidden = rows.length === 0;
  statsDataFeedback.textContent = rows.length
    ? `${ratings.length} evaluación(es) recibidas en total.`
    : 'Aún no hay evaluaciones registradas.';
}

async function setStatsSession(session) {
  const email = session?.user?.email?.toLowerCase();
  if (session && email !== companyEmail) {
    await supabaseClient.auth.signOut();
    statsAuthFeedback.textContent = `Acceso restringido a ${companyEmail}.`;
    statsAuthFeedback.hidden = false;
    return;
  }

  const isAuthorized = Boolean(session && email === companyEmail);
  statsLogin.hidden = isAuthorized;
  statsDashboard.hidden = !isAuthorized;
  if (!isAuthorized) return;

  document.querySelector('#stats-account').textContent = `Sesión de empresa: ${session.user.email}`;
  statsAuthFeedback.hidden = true;
  await loadTechnicianStats();
}

document.querySelector('#stats-login-button').addEventListener('click', async () => {
  if (!supabaseClient) {
    statsAuthFeedback.textContent = 'El acceso privado aún no está configurado. Sigue los pasos de configuración de Supabase.';
    statsAuthFeedback.hidden = false;
    return;
  }
  statsAuthFeedback.textContent = 'Enviando enlace de acceso...';
  statsAuthFeedback.hidden = false;
  const { error } = await supabaseClient.auth.signInWithOtp({
    email: companyEmail,
    options: {
      shouldCreateUser: false,
      emailRedirectTo: window.location.origin + window.location.pathname,
    },
  });
  if (error) {
    statsAuthFeedback.textContent = 'No se pudo enviar el enlace de acceso. Verifica la configuración de Auth en Supabase.';
    console.error('Company login link request failed:', error.message);
    return;
  }
  statsAuthFeedback.textContent = `Revisa el correo ${companyEmail} para ingresar a las estadísticas.`;
});

document.querySelector('#stats-logout-button').addEventListener('click', async () => {
  if (!supabaseClient) return;
  const { error } = await supabaseClient.auth.signOut();
  if (error) {
    statsDataFeedback.textContent = 'No se pudo cerrar la sesión. Inténtalo nuevamente.';
    console.error('Company logout failed:', error.message);
    return;
  }
  statsDashboard.hidden = true;
  statsLogin.hidden = false;
});

if (!supabaseClient) {
  statsAuthFeedback.textContent = 'Estadísticas privadas y recepción de encuestas pendientes de configuración.';
  statsAuthFeedback.hidden = false;
} else {
  supabaseClient.auth.onAuthStateChange((_event, session) => {
    window.setTimeout(() => setStatsSession(session), 0);
  });
  supabaseClient.auth.getSession().then(({ data, error }) => {
    if (error) {
      statsAuthFeedback.textContent = 'No se pudo comprobar la sesión de empresa. Recarga la página.';
      statsAuthFeedback.hidden = false;
      console.error('Could not read company session:', error.message);
      return;
    }
    return setStatsSession(data.session);
  });
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js'));
}