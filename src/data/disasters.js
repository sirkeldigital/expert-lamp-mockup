export const disasters = [
  {
    id: 'DST-001',
    province: 'Kalimantan Selatan',
    regency: 'Kab. Banjar',
    type: 'Banjir & Longsor',
    severity: 8.9,
    severityLabel: 'AWAS',
    center: [-3.4186, 114.8490],
    zoom: 12,
    updatedAt: '14:21 WIB',
    weather: { temp: 32, humidity: 89, wind: 15 },
    rainfall: 82,
    affected: [
      { name: 'Martapura', sub: 'Banjarmasin', area: '0.379 Km\u00b2', status: 'AWAS' },
      { name: 'Sungai Tabuk', sub: 'Km Simpang', area: '1,076 Km\u00b2', status: 'AWAS' },
      { name: 'Aranio', sub: 'Pengunungan', area: '0.231 Km\u00b2', status: '1' },
    ],
    stats: { floodArea: 0.379, buildings: 1076, roadsCut: 1, refugees: 1856, deaths: 0 },
    waterLevels: [
      { station: 'AWLR Martapura Hilir', level: '4.2m', status: 'Siaga 3', color: 'var(--color-error)' },
      { station: 'AWLR Sungai Tabuk', level: '3.8m', status: 'Siaga 2', color: 'var(--color-warning)' },
      { station: 'Pos Pantau Aranio', level: '2.1m', status: 'Normal', color: 'var(--color-success)' },
    ],
    waterChart: [25,30,35,42,48,55,62,70,78,85,88,92,95,90,86,82],
    events: [
      { time: '14:25', text: 'Sensor TMA Martapura naik ke 4.2m (Siaga 3)', color: 'var(--color-error)' },
      { time: '14:18', text: 'Tanggul Sungai Tabuk jebol titik KM 4.2', color: 'var(--color-error)' },
      { time: '14:10', text: 'Tim SAR tiba di Simpang Martapura', color: 'var(--color-success)' },
      { time: '13:55', text: 'BMKG: Peringatan curah hujan sangat lebat', color: 'var(--color-warning)' },
    ],
    riskScore: 86,
    riskDesc: 'Martapura Bridge will collapse, if not reinforced within 12 hours.',
    urgentActions: [
      'Mobilize 2 excavators and 1 dump truck from I-WY Facility Banjarmasin, 5 km NE, ETA 50 min.',
      'Deploy emergency response team to Martapura, Sungai Tabuk now.',
    ],
    polygons: [
      { name: 'Banjir Martapura', coords: [[-3.41,114.84],[-3.405,114.855],[-3.415,114.86],[-3.425,114.852],[-3.42,114.838]], sev: 'high', color: '#dc262680' },
      { name: 'Banjir Sungai Tabuk', coords: [[-3.43,114.82],[-3.425,114.835],[-3.435,114.84],[-3.442,114.83],[-3.438,114.818]], sev: 'medium', color: '#f59e0b80' },
    ],
    markers: [
      { type: 'bridge', name: 'Martapura Bridge', status: 'Collapse risk', pos: [-3.412, 114.85] },
      { type: 'house', name: 'Cluster Rumah Terdampak', status: '24 rumah', pos: [-3.416, 114.846] },
      { type: 'truck', name: 'Dump Truck #1', status: 'En route', pos: [-3.405, 114.842] },
      { type: 'warning', name: 'Landslide Warning', status: 'High risk', pos: [-3.408, 114.858] },
    ],
  },
  {
    id: 'DST-002',
    province: 'Jawa Barat',
    regency: 'Kab. Garut',
    type: 'Banjir Bandang',
    severity: 7.5,
    severityLabel: 'SIAGA',
    center: [-7.2175, 107.9089],
    zoom: 13,
    updatedAt: '13:45 WIB',
    weather: { temp: 28, humidity: 92, wind: 20 },
    rainfall: 65,
    affected: [
      { name: 'Banyuresmi', sub: 'Garut Kota', area: '0.52 Km\u00b2', status: 'AWAS' },
      { name: 'Tarogong', sub: 'Garut Selatan', area: '0.18 Km\u00b2', status: 'SIAGA' },
    ],
    stats: { floodArea: 0.52, buildings: 420, roadsCut: 3, refugees: 2340, deaths: 0 },
    waterLevels: [
      { station: 'AWLR Cimanuk Hilir', level: '5.1m', status: 'Siaga 3', color: 'var(--color-error)' },
      { station: 'Pos Tarogong', level: '3.2m', status: 'Siaga 1', color: 'var(--color-warning)' },
    ],
    waterChart: [20,22,28,35,50,68,75,82,88,90,85,80,78,75,72,70],
    events: [
      { time: '13:45', text: 'Banjir bandang melanda Banyuresmi', color: 'var(--color-error)' },
      { time: '13:20', text: 'Evakuasi 500 KK dimulai', color: 'var(--color-info)' },
      { time: '12:50', text: 'Jembatan Cimanuk terputus', color: 'var(--color-error)' },
    ],
    riskScore: 72, riskDesc: 'Debit Sungai Cimanuk masih tinggi, potensi banjir susulan.', urgentActions: ['Evakuasi warga bantaran sungai Cimanuk.', 'Kirim 5 perahu karet dari Bandung.'],
    polygons: [{ name: 'Banjir Banyuresmi', coords: [[-7.215,107.905],[-7.21,107.915],[-7.22,107.918],[-7.225,107.91]], sev: 'high', color: '#dc262680' }],
    markers: [{ type: 'bridge', name: 'Jembatan Cimanuk', status: 'Terputus', pos: [-7.217, 107.91] }],
  },
  {
    id: 'DST-003',
    province: 'Sulawesi Selatan',
    regency: 'Kota Makassar',
    type: 'Banjir Rob',
    severity: 6.2,
    severityLabel: 'SIAGA',
    center: [-5.1477, 119.4327],
    zoom: 13,
    updatedAt: '12:30 WIB',
    weather: { temp: 31, humidity: 85, wind: 25 },
    rainfall: 35,
    affected: [
      { name: 'Tallo', sub: 'Makassar Utara', area: '1.2 Km\u00b2', status: 'SIAGA' },
      { name: 'Mariso', sub: 'Makassar Barat', area: '0.8 Km\u00b2', status: 'SIAGA' },
    ],
    stats: { floodArea: 2.0, buildings: 890, roadsCut: 2, refugees: 1200, deaths: 0 },
    waterLevels: [{ station: 'Pelabuhan Makassar', level: '2.8m', status: 'Siaga 2', color: 'var(--color-warning)' }],
    waterChart: [30,35,40,45,50,55,58,60,62,58,55,52,50,48,46,45],
    events: [
      { time: '12:30', text: 'Banjir rob melanda pesisir Tallo', color: 'var(--color-warning)' },
      { time: '12:00', text: 'Pasang tertinggi diprediksi pukul 15:00', color: 'var(--color-info)' },
    ],
    riskScore: 58, riskDesc: 'Pasang laut tinggi berlanjut hingga 3 hari ke depan.', urgentActions: ['Pasang tanggul darurat di pesisir Tallo.'],
    polygons: [{ name: 'Rob Tallo', coords: [[-5.14,119.43],[-5.135,119.44],[-5.145,119.445],[-5.15,119.435]], sev: 'medium', color: '#f59e0b80' }],
    markers: [{ type: 'warning', name: 'Pesisir Tallo', status: 'Banjir rob', pos: [-5.143, 119.435] }],
  },
  {
    id: 'DST-004',
    province: 'Sumatera Utara',
    regency: 'Kab. Deli Serdang',
    type: 'Longsor',
    severity: 7.8,
    severityLabel: 'AWAS',
    center: [3.3942, 98.6529],
    zoom: 13,
    updatedAt: '11:15 WIB',
    weather: { temp: 26, humidity: 95, wind: 10 },
    rainfall: 90,
    affected: [{ name: 'Sibolangit', sub: 'Deli Serdang', area: '0.15 Km\u00b2', status: 'AWAS' }],
    stats: { floodArea: 0.15, buildings: 45, roadsCut: 2, refugees: 320, deaths: 2 },
    waterLevels: [{ station: 'Pos Sibolangit', level: '1.5m', status: 'Siaga 1', color: 'var(--color-warning)' }],
    waterChart: [40,45,55,65,75,85,90,88,82,78,74,70,68,65,62,60],
    events: [
      { time: '11:15', text: 'Longsor besar menutup jalan trans Sumatera', color: 'var(--color-error)' },
      { time: '11:00', text: '2 korban jiwa ditemukan', color: 'var(--color-error)' },
    ],
    riskScore: 80, riskDesc: 'Tanah masih labil, potensi longsor susulan tinggi.', urgentActions: ['Tutup akses jalan Sibolangit-Berastagi.', 'Kirim alat berat dari Medan.'],
    polygons: [{ name: 'Longsor Sibolangit', coords: [[3.396,98.65],[3.398,98.658],[3.392,98.66],[3.39,98.652]], sev: 'high', color: '#dc262680' }],
    markers: [{ type: 'warning', name: 'Titik Longsor', status: '2 korban', pos: [3.394, 98.655] }],
  },
  {
    id: 'DST-005',
    province: 'NTT',
    regency: 'Kab. Lembata',
    type: 'Erupsi & Lahar',
    severity: 9.1,
    severityLabel: 'AWAS',
    center: [-8.5295, 123.5044],
    zoom: 12,
    updatedAt: '10:00 WIB',
    weather: { temp: 30, humidity: 78, wind: 18 },
    rainfall: 20,
    affected: [{ name: 'Ile Ape', sub: 'Lembata Timur', area: '3.5 Km\u00b2', status: 'AWAS' }],
    stats: { floodArea: 3.5, buildings: 210, roadsCut: 4, refugees: 4500, deaths: 5 },
    waterLevels: [],
    waterChart: [10,10,12,15,18,20,22,25,30,35,40,45,50,48,45,42],
    events: [
      { time: '10:00', text: 'Gunung Ile Lewotolok erupsi level IV', color: 'var(--color-error)' },
      { time: '09:30', text: 'Lahar dingin menerjang Desa Ile Ape', color: 'var(--color-error)' },
    ],
    riskScore: 95, riskDesc: 'Erupsi berlanjut, radius bahaya 5km dari kawah.', urgentActions: ['Evakuasi total radius 5km.', 'Siapkan helikopter dari Kupang.'],
    polygons: [{ name: 'Zona Bahaya Erupsi', coords: [[-8.52,123.5],[-8.515,123.51],[-8.53,123.515],[-8.54,123.505]], sev: 'high', color: '#dc262680' }],
    markers: [{ type: 'warning', name: 'Gunung Ile Lewotolok', status: 'Erupsi Level IV', pos: [-8.527, 123.505] }],
  },
  {
    id: 'DST-006',
    province: 'Jawa Tengah',
    regency: 'Kab. Demak',
    type: 'Banjir',
    severity: 6.8,
    severityLabel: 'SIAGA',
    center: [-6.8914, 110.6381],
    zoom: 12,
    updatedAt: '13:00 WIB',
    weather: { temp: 33, humidity: 88, wind: 12 },
    rainfall: 55,
    affected: [
      { name: 'Sayung', sub: 'Demak', area: '2.1 Km\u00b2', status: 'SIAGA' },
      { name: 'Karanganyar', sub: 'Demak', area: '0.8 Km\u00b2', status: 'SIAGA' },
    ],
    stats: { floodArea: 2.9, buildings: 650, roadsCut: 1, refugees: 980, deaths: 0 },
    waterLevels: [{ station: 'AWLR Sayung', level: '3.0m', status: 'Siaga 2', color: 'var(--color-warning)' }],
    waterChart: [20,25,30,38,45,52,58,62,65,68,70,68,65,62,60,58],
    events: [{ time: '13:00', text: 'Genangan meluas ke Desa Sayung', color: 'var(--color-warning)' }],
    riskScore: 52, riskDesc: 'Banjir tahunan, drainase tidak memadai.', urgentActions: ['Aktifkan pompa di 3 titik.'],
    polygons: [{ name: 'Banjir Sayung', coords: [[-6.885,110.63],[-6.88,110.645],[-6.895,110.65],[-6.9,110.635]], sev: 'medium', color: '#f59e0b80' }],
    markers: [{ type: 'house', name: 'Permukiman Sayung', status: '650 rumah', pos: [-6.89, 110.638] }],
  },
  {
    id: 'DST-007',
    province: 'Papua',
    regency: 'Kota Jayapura',
    type: 'Banjir & Longsor',
    severity: 7.2,
    severityLabel: 'SIAGA',
    center: [-2.5333, 140.7167],
    zoom: 13,
    updatedAt: '09:30 WIB',
    weather: { temp: 29, humidity: 94, wind: 8 },
    rainfall: 75,
    affected: [{ name: 'Sentani', sub: 'Jayapura', area: '0.45 Km\u00b2', status: 'AWAS' }],
    stats: { floodArea: 0.45, buildings: 180, roadsCut: 2, refugees: 560, deaths: 0 },
    waterLevels: [{ station: 'Danau Sentani', level: '2.5m', status: 'Siaga 2', color: 'var(--color-warning)' }],
    waterChart: [30,35,40,48,55,62,68,72,75,73,70,68,65,63,60,58],
    events: [{ time: '09:30', text: 'Luapan Danau Sentani ke permukiman', color: 'var(--color-warning)' }],
    riskScore: 65, riskDesc: 'Level danau masih tinggi.', urgentActions: ['Evakuasi warga pinggir danau.'],
    polygons: [{ name: 'Banjir Sentani', coords: [[-2.53,140.715],[-2.525,140.72],[-2.535,140.725],[-2.54,140.718]], sev: 'medium', color: '#f59e0b80' }],
    markers: [{ type: 'house', name: 'Permukiman Sentani', status: '180 rumah', pos: [-2.533, 140.718] }],
  },
  {
    id: 'DST-008',
    province: 'Bali',
    regency: 'Kab. Karangasem',
    type: 'Erupsi Gunung Agung',
    severity: 8.5,
    severityLabel: 'AWAS',
    center: [-8.3433, 115.5072],
    zoom: 12,
    updatedAt: '08:00 WIB',
    weather: { temp: 27, humidity: 80, wind: 22 },
    rainfall: 15,
    affected: [{ name: 'Rendang', sub: 'Karangasem', area: '5.0 Km\u00b2', status: 'AWAS' }],
    stats: { floodArea: 5.0, buildings: 320, roadsCut: 3, refugees: 8200, deaths: 0 },
    waterLevels: [],
    waterChart: [5,5,8,10,12,15,18,20,22,25,28,30,32,30,28,26],
    events: [
      { time: '08:00', text: 'Status Gunung Agung naik ke Level III', color: 'var(--color-error)' },
      { time: '07:30', text: 'Hujan abu vulkanik di Rendang', color: 'var(--color-warning)' },
    ],
    riskScore: 82, riskDesc: 'Aktivitas vulkanik meningkat, tremor kontinu.', urgentActions: ['Evakuasi radius 8km.', 'Tutup bandara Ngurah Rai jika abu meluas.'],
    polygons: [{ name: 'Zona Bahaya Agung', coords: [[-8.33,115.5],[-8.325,115.515],[-8.345,115.52],[-8.355,115.505]], sev: 'high', color: '#dc262680' }],
    markers: [{ type: 'warning', name: 'Gunung Agung', status: 'Level III', pos: [-8.343, 115.508] }],
  },
  {
    id: 'DST-009',
    province: 'Kalimantan Barat',
    regency: 'Kab. Sintang',
    type: 'Banjir',
    severity: 6.5,
    severityLabel: 'SIAGA',
    center: [0.0789, 111.4942],
    zoom: 12,
    updatedAt: '11:45 WIB',
    weather: { temp: 31, humidity: 90, wind: 8 },
    rainfall: 48,
    affected: [{ name: 'Sintang Kota', sub: 'Sintang', area: '1.8 Km\u00b2', status: 'SIAGA' }],
    stats: { floodArea: 1.8, buildings: 380, roadsCut: 1, refugees: 720, deaths: 0 },
    waterLevels: [{ station: 'AWLR Sungai Kapuas', level: '8.2m', status: 'Siaga 2', color: 'var(--color-warning)' }],
    waterChart: [35,38,42,45,50,55,58,60,62,64,66,65,63,60,58,55],
    events: [{ time: '11:45', text: 'Sungai Kapuas meluap ke permukiman', color: 'var(--color-warning)' }],
    riskScore: 48, riskDesc: 'Banjir tahunan Sungai Kapuas.', urgentActions: ['Distribusikan logistik ke posko.'],
    polygons: [{ name: 'Banjir Sintang', coords: [[0.075,111.49],[0.08,111.5],[0.085,111.495],[0.082,111.488]], sev: 'low', color: '#3b82f680' }],
    markers: [{ type: 'house', name: 'Kota Sintang', status: '380 rumah', pos: [0.079, 111.494] }],
  },
  {
    id: 'DST-010',
    province: 'Aceh',
    regency: 'Kab. Aceh Utara',
    type: 'Banjir',
    severity: 7.0,
    severityLabel: 'SIAGA',
    center: [5.0890, 97.1413],
    zoom: 12,
    updatedAt: '10:30 WIB',
    weather: { temp: 30, humidity: 91, wind: 14 },
    rainfall: 60,
    affected: [
      { name: 'Lhoksukon', sub: 'Aceh Utara', area: '1.5 Km\u00b2', status: 'SIAGA' },
      { name: 'Matangkuli', sub: 'Aceh Utara', area: '0.9 Km\u00b2', status: 'SIAGA' },
    ],
    stats: { floodArea: 2.4, buildings: 520, roadsCut: 2, refugees: 1100, deaths: 0 },
    waterLevels: [{ station: 'AWLR Krueng Pase', level: '4.5m', status: 'Siaga 3', color: 'var(--color-error)' }],
    waterChart: [25,30,38,45,55,65,72,78,82,85,83,80,78,75,72,70],
    events: [
      { time: '10:30', text: 'Krueng Pase meluap, 5 desa terendam', color: 'var(--color-error)' },
      { time: '10:00', text: 'Jalan Medan-Banda Aceh tergenang', color: 'var(--color-warning)' },
    ],
    riskScore: 68, riskDesc: 'Hujan deras masih berlanjut, debit sungai tinggi.', urgentActions: ['Kirim bantuan dari Lhokseumawe.', 'Aktifkan posko di 3 kecamatan.'],
    polygons: [{ name: 'Banjir Lhoksukon', coords: [[5.085,97.14],[5.09,97.148],[5.095,97.142],[5.092,97.135]], sev: 'high', color: '#dc262680' }],
    markers: [{ type: 'house', name: 'Permukiman Lhoksukon', status: '520 rumah', pos: [5.089, 97.142] }],
  },
  {
    id: 'DST-011',
    province: 'DKI Jakarta',
    regency: 'Mampang Prapatan',
    type: 'Kemacetan & Jalan Rusak',
    severity: 6.0,
    severityLabel: 'SIAGA',
    center: [-6.2465, 106.8230],
    zoom: 15,
    updatedAt: '15:30 WIB',
    weather: { temp: 34, humidity: 75, wind: 8 },
    rainfall: 10,
    affected: [
      { name: 'Mampang Prapatan', sub: 'Jakarta Selatan', area: '0.42 Km\u00b2', status: 'SIAGA' },
      { name: 'Kuningan', sub: 'Jakarta Selatan', area: '0.38 Km\u00b2', status: 'SIAGA' },
      { name: 'Pancoran', sub: 'Jakarta Selatan', area: '0.55 Km\u00b2', status: 'SIAGA' },
    ],
    stats: { floodArea: 1.35, buildings: 85, roadsCut: 7, refugees: 0, deaths: 0 },
    waterLevels: [],
    waterChart: [5,8,12,18,25,35,48,60,72,85,90,88,82,75,68,60],
    events: [
      { time: '15:30', text: 'Kemacetan parah Jl. Mampang Prapatan Raya arah Kuningan', color: 'var(--color-error)' },
      { time: '15:10', text: 'Jalan ambles di Jl. Bangka Raya sedalam 1.5m', color: 'var(--color-error)' },
      { time: '14:45', text: 'Aspal terkelupas sepanjang 200m di Jl. Tegal Parang', color: 'var(--color-warning)' },
      { time: '14:20', text: 'Pengalihan arus lalu lintas via Jl. Gatot Subroto', color: 'var(--color-info)' },
      { time: '13:50', text: 'Truk terperosok lubang di Jl. Duren Tiga Raya', color: 'var(--color-warning)' },
      { time: '13:15', text: 'Dinas PU terjunkan 3 tim perbaikan jalan', color: 'var(--color-success)' },
    ],
    riskScore: 62,
    riskDesc: 'Kerusakan jalan akibat beban berlebih dan drainase buruk menyebabkan kemacetan total di 5 titik. Perbaikan darurat dibutuhkan segera.',
    urgentActions: [
      'Perbaikan darurat Jl. Bangka Raya (jalan ambles) - estimasi 48 jam.',
      'Pasang rambu peringatan & cone di 7 titik jalan rusak.',
      'Koordinasi Dishub untuk pengalihan arus via Gatot Subroto & Rasuna Said.',
      'Kerahkan alat berat untuk tambal jalan di Jl. Tegal Parang & Duren Tiga.',
    ],
    polygons: [
      { name: 'Kemacetan Mampang Raya', coords: [[-6.2435,106.8205],[-6.2420,106.8255],[-6.2460,106.8270],[-6.2475,106.8220]], sev: 'high', color: '#dc262680' },
      { name: 'Jalan Rusak Bangka', coords: [[-6.2490,106.8180],[-6.2480,106.8210],[-6.2510,106.8220],[-6.2520,106.8190]], sev: 'medium', color: '#f59e0b80' },
      { name: 'Kemacetan Kuningan', coords: [[-6.2400,106.8270],[-6.2385,106.8310],[-6.2420,106.8325],[-6.2435,106.8285]], sev: 'medium', color: '#f59e0b80' },
    ],
    markers: [
      { type: 'traffic', name: 'Macet Total Mampang Raya', status: 'Kemacetan >2 jam, kecepatan 5 km/h', pos: [-6.2450, 106.8235] },
      { type: 'traffic', name: 'Macet Kuningan Arah Casablanca', status: 'Antrean 3 km', pos: [-6.2410, 106.8290] },
      { type: 'traffic', name: 'Macet Duren Tiga', status: 'Pengalihan arus aktif', pos: [-6.2520, 106.8200] },
      { type: 'road_damage', name: 'Jalan Ambles Bangka Raya', status: 'Kedalaman 1.5m, lebar 4m', pos: [-6.2495, 106.8195] },
      { type: 'road_damage', name: 'Aspal Terkelupas Tegal Parang', status: 'Panjang 200m, dalam perbaikan', pos: [-6.2470, 106.8175] },
      { type: 'road_damage', name: 'Lubang Jalan Duren Tiga Raya', status: 'Truk terperosok, evakuasi berlangsung', pos: [-6.2535, 106.8215] },
      { type: 'warning', name: 'Pengalihan Arus Gatot Subroto', status: 'Dishub aktif mengatur', pos: [-6.2380, 106.8250] },
      { type: 'truck', name: 'Tim PU Perbaikan #1', status: 'On-site Bangka Raya', pos: [-6.2500, 106.8200] },
      { type: 'truck', name: 'Tim PU Perbaikan #2', status: 'En route Tegal Parang', pos: [-6.2460, 106.8160] },
      { type: 'excavator', name: 'Excavator Dinas PU', status: 'Beroperasi di Bangka Raya', pos: [-6.2488, 106.8188] },
    ],
  },
]

// Generate heatmap data around a disaster center
function seededRandom(seed) {
  let s = seed
  return function() {
    s = (s * 16807 + 0) % 2147483647
    return (s - 1) / 2147483646
  }
}

export function generateHeatmap(disaster) {
  const [lat, lng] = disaster.center
  const points = []
  const rand = seededRandom(disaster.id.charCodeAt(4) * 1000 + disaster.severity * 100)
  const count = 15 + Math.floor(rand() * 15)
  const spread = disaster.zoom >= 13 ? 0.015 : 0.03
  for (let i = 0; i < count; i++) {
    const dlat = (rand() - 0.5) * spread * 2
    const dlng = (rand() - 0.5) * spread * 2
    const intensity = 0.3 + rand() * 0.7
    points.push([lat + dlat, lng + dlng, intensity])
  }
  return points
}

const sensorTypes = [
  { type: 'water_level', names: ['Sensor TMA', 'Pos Pantau', 'AWLR'], values: ['3.2m', '4.1m', '2.8m', '5.0m', '1.9m'] },
  { type: 'rainfall', names: ['Rain Gauge', 'Stasiun Hujan'], values: ['45 mm/jam', '82 mm/jam', '30 mm/jam', '65 mm/jam'] },
  { type: 'weather', names: ['Weather Station', 'Stasiun Cuaca'], values: ['30°C', '28°C', '32°C', '26°C'] },
  { type: 'ews', names: ['EWS Longsor', 'Early Warning'], values: ['SIAGA', 'WASPADA', 'AWAS'] },
  { type: 'cctv', names: ['CCTV Monitoring', 'IP Cam'], values: ['Online', 'Online', 'Offline'] },
  { type: 'structure', names: ['Sensor Struktural', 'Tilt Meter'], values: ['Crack 8mm', 'Normal', 'Defleksi 2mm'] },
]

export function generateSensors(disaster) {
  const [lat, lng] = disaster.center
  const sensors = []
  const rand = seededRandom(disaster.id.charCodeAt(5) * 777 + disaster.severity * 50)
  const count = 5 + Math.floor(rand() * 6)
  const spread = disaster.zoom >= 13 ? 0.012 : 0.025
  const statuses = ['critical', 'warning', 'active', 'active']

  for (let i = 0; i < count; i++) {
    const dlat = (rand() - 0.5) * spread * 2
    const dlng = (rand() - 0.5) * spread * 2
    const st = sensorTypes[Math.floor(rand() * sensorTypes.length)]
    const name = st.names[Math.floor(rand() * st.names.length)] + ' ' + disaster.regency.replace('Kab. ', '').replace('Kota ', '')
    const value = st.values[Math.floor(rand() * st.values.length)]
    const status = statuses[Math.floor(rand() * statuses.length)]
    sensors.push({
      id: `SEN-${disaster.id.slice(-3)}-${String(i + 1).padStart(2, '0')}`,
      position: [lat + dlat, lng + dlng],
      name,
      type: st.type,
      value,
      status,
      detail: `Data real-time dari sensor ${st.type} area ${disaster.regency}`,
      lastUpdate: disaster.updatedAt,
    })
  }
  return sensors
}
