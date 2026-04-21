export const MAP_CENTER = [-3.4186, 114.8490]
export const MAP_ZOOM = 12

export const affectedAreas = [
  { name: 'Martapura', subtext: 'Banjarmasin', totalAffected: '0.37914 Km\u00b2', severity: 'AWAS' },
  { name: 'Sungai Tabuk', subtext: 'Km Simpang', totalAffected: '1,076 Km\u00b2', severity: 'AWAS' },
  { name: 'Aranio', subtext: 'Pengunungan', totalAffected: '0.231 Km\u00b2', severity: '1' },
]

export const aiAssistant = {
  riskPrediction: { level: 'High', score: 86, description: 'Martapura Bridge will collapse, if not reinforced within 12 hours.' },
  urgentActions: [
    'Mobilize 2 excavators and 1 dump truck from I-WY Facility Banjarmasin, 5 km NE, ETA 50 min.',
    'Deploy emergency response team to Martapura, Sungai Tabuk now.',
  ],
}

export const floodPolygons = [
  { id: 'flood-1', name: 'Area Banjir Martapura', coordinates: [[-3.410,114.840],[-3.405,114.855],[-3.415,114.860],[-3.425,114.852],[-3.420,114.838]], severity: 'high', color: '#dc262680' },
  { id: 'flood-2', name: 'Area Banjir Sungai Tabuk', coordinates: [[-3.430,114.820],[-3.425,114.835],[-3.435,114.840],[-3.442,114.830],[-3.438,114.818]], severity: 'medium', color: '#f59e0b80' },
  { id: 'flood-3', name: 'Genangan Aranio', coordinates: [[-3.450,114.860],[-3.448,114.870],[-3.456,114.875],[-3.460,114.865]], severity: 'low', color: '#3b82f680' },
]

export const mapMarkers = [
  { id: 'bridge-1', type: 'bridge', name: 'Martapura Bridge', status: 'Collapse risk', detail: '3 km  ETA 10 min', position: [-3.4120, 114.8500] },
  { id: 'vehicle-1', type: 'truck', name: 'Dump Truck #1', status: 'En route', position: [-3.4050, 114.8420] },
  { id: 'vehicle-2', type: 'excavator', name: 'Excavator #1', status: 'En route', position: [-3.4180, 114.8350] },
  { id: 'vehicle-3', type: 'excavator', name: 'Excavator #2', status: 'Standby', position: [-3.4250, 114.8550] },
  { id: 'house-1', type: 'house', name: 'Rumah Terdampak Cluster A', status: '24 rumah', position: [-3.4160, 114.8460] },
  { id: 'house-2', type: 'house', name: 'Rumah Terdampak Cluster B', status: '18 rumah', position: [-3.4300, 114.8280] },
  { id: 'warning-1', type: 'warning', name: 'Landslide Warning', status: 'High risk zone', position: [-3.4080, 114.8580] },
]

export const heatmapData = [
  [-3.410,114.845,0.9],[-3.412,114.850,1.0],[-3.415,114.848,0.8],[-3.408,114.852,0.7],
  [-3.420,114.840,0.6],[-3.417,114.855,0.85],[-3.425,114.830,0.75],[-3.430,114.825,0.65],
  [-3.435,114.835,0.7],[-3.428,114.828,0.5],[-3.413,114.843,0.95],[-3.419,114.851,0.6],
  [-3.422,114.838,0.55],[-3.405,114.847,0.4],[-3.440,114.835,0.45],[-3.432,114.840,0.5],
  [-3.411,114.856,0.8],[-3.416,114.860,0.6],[-3.450,114.865,0.5],[-3.448,114.870,0.4],
]

// Sensor / monitoring points (clickable on map near heatmap areas)
export const sensorPoints = [
  { id: 'SEN-001', position: [-3.4100, 114.8450], name: 'Sensor TMA Martapura Hilir', type: 'water_level', value: '4.2m', status: 'critical', detail: 'Debit: 285 m\u00b3/s | Trend: Naik | Siaga 3', lastUpdate: '14:20 WIB' },
  { id: 'SEN-002', position: [-3.4120, 114.8500], name: 'Rain Gauge Jembatan Martapura', type: 'rainfall', value: '82 mm/jam', status: 'warning', detail: 'Curah hujan sangat lebat | Akumulasi 24h: 214mm', lastUpdate: '14:25 WIB' },
  { id: 'SEN-003', position: [-3.4150, 114.8480], name: 'CCTV Simpang Martapura', type: 'cctv', value: 'Online', status: 'active', detail: 'Genangan terdeteksi 40cm | Arus lalu lintas terhenti', lastUpdate: '14:22 WIB' },
  { id: 'SEN-004', position: [-3.4250, 114.8300], name: 'Sensor TMA Sungai Tabuk', type: 'water_level', value: '3.8m', status: 'warning', detail: 'Debit: 192 m\u00b3/s | Trend: Stabil | Siaga 2', lastUpdate: '14:18 WIB' },
  { id: 'SEN-005', position: [-3.4300, 114.8280], name: 'Soil Moisture Aranio KM3', type: 'soil', value: '94%', status: 'critical', detail: 'Kelembaban tanah jenuh | Kemiringan 42\u00b0 | Rawan longsor', lastUpdate: '14:15 WIB' },
  { id: 'SEN-006', position: [-3.4350, 114.8350], name: 'Weather Station Tabuk', type: 'weather', value: '32\u00b0C', status: 'active', detail: 'Angin: 15 km/h NE | Kelembaban: 89% | Tekanan: 1008 hPa', lastUpdate: '14:10 WIB' },
  { id: 'SEN-007', position: [-3.4080, 114.8520], name: 'EWS Longsor Lereng Utara', type: 'ews', value: 'SIAGA', status: 'warning', detail: 'Pergerakan tanah 2.3mm/hari | Getaran mikro terdeteksi', lastUpdate: '14:12 WIB' },
  { id: 'SEN-008', position: [-3.4190, 114.8510], name: 'Sensor Struktural Jembatan', type: 'structure', value: 'Crack 12mm', status: 'critical', detail: 'Defleksi bertambah 0.8mm/jam | Vibrasi abnormal', lastUpdate: '14:23 WIB' },
  { id: 'SEN-009', position: [-3.4450, 114.8650], name: 'Pos Pantau Aranio', type: 'water_level', value: '2.1m', status: 'active', detail: 'Debit: 68 m\u00b3/s | Trend: Turun | Normal', lastUpdate: '14:05 WIB' },
  { id: 'SEN-010', position: [-3.4130, 114.8430], name: 'Rain Gauge Martapura Kota', type: 'rainfall', value: '45 mm/jam', status: 'warning', detail: 'Curah hujan lebat | Akumulasi 24h: 156mm', lastUpdate: '14:19 WIB' },
]

export const projects = [
  { id: 'PRJ-001', name: 'Rehabilitasi Jembatan Martapura', status: 'urgent', progress: 15, budget: 'Rp 12.5 M', contractor: 'PT Waskita Karya', deadline: '2026-06-30', category: 'Jembatan' },
  { id: 'PRJ-002', name: 'Perbaikan Jalan Nasional Rute 5', status: 'active', progress: 62, budget: 'Rp 8.2 M', contractor: 'PT Hutama Karya', deadline: '2026-05-15', category: 'Jalan' },
  { id: 'PRJ-003', name: 'Pembangunan Tanggul Sungai Tabuk', status: 'active', progress: 45, budget: 'Rp 5.8 M', contractor: 'PT Adhi Karya', deadline: '2026-07-20', category: 'Sungai' },
  { id: 'PRJ-004', name: 'Drainase Kawasan Aranio', status: 'planning', progress: 5, budget: 'Rp 3.1 M', contractor: 'PT PP Persero', deadline: '2026-09-01', category: 'Drainase' },
  { id: 'PRJ-005', name: 'Relokasi Rumah Warga Terdampak', status: 'active', progress: 30, budget: 'Rp 15.0 M', contractor: 'PT Brantas Abipraya', deadline: '2026-08-10', category: 'Perumahan' },
  { id: 'PRJ-006', name: 'Perkuatan Lereng Pegunungan Meratus', status: 'planning', progress: 0, budget: 'Rp 22.0 M', contractor: '-', deadline: '2026-12-01', category: 'Geoteknik' },
]

export const tenders = [
  { id: 'TND-2026-001', title: 'Pengadaan Material Tanggul Banjir', value: 'Rp 4.2 M', status: 'open', deadline: '2026-05-10', bids: 5, category: 'Material' },
  { id: 'TND-2026-002', title: 'Jasa Konstruksi Jembatan Darurat', value: 'Rp 7.8 M', status: 'evaluation', deadline: '2026-04-28', bids: 3, category: 'Konstruksi' },
  { id: 'TND-2026-003', title: 'Sewa Alat Berat Excavator & Dump Truck', value: 'Rp 1.5 M', status: 'open', deadline: '2026-05-05', bids: 8, category: 'Peralatan' },
  { id: 'TND-2026-004', title: 'Konsultan Pengawas Rehabilitasi Jalan', value: 'Rp 2.1 M', status: 'awarded', deadline: '2026-04-20', bids: 4, winner: 'PT Virama Karya', category: 'Konsultan' },
  { id: 'TND-2026-005', title: 'Pengadaan Pompa Air Submersible', value: 'Rp 0.8 M', status: 'open', deadline: '2026-05-12', bids: 12, category: 'Peralatan' },
]

export const risks = [
  { id: 'RSK-001', area: 'Martapura Bridge', type: 'Structural Collapse', level: 'critical', score: 92, trend: 'up', lastAssessed: '2 jam lalu', description: 'Fondasi terkikis 40%, butuh penguatan segera.' },
  { id: 'RSK-002', area: 'Sungai Tabuk Hilir', type: 'Banjir Bandang', level: 'high', score: 78, trend: 'up', lastAssessed: '1 jam lalu', description: 'Debit air naik 300% dari normal. Potensi luapan 6 jam.' },
  { id: 'RSK-003', area: 'Lereng Aranio', type: 'Longsor', level: 'high', score: 71, trend: 'stable', lastAssessed: '30 menit lalu', description: 'Tanah jenuh air, kemiringan >40 derajat.' },
  { id: 'RSK-004', area: 'Jalan Nasional KM 12', type: 'Amblas Jalan', level: 'medium', score: 55, trend: 'down', lastAssessed: '3 jam lalu', description: 'Retakan terdeteksi sepanjang 200m.' },
  { id: 'RSK-005', area: 'Permukiman Martapura Timur', type: 'Genangan', level: 'medium', score: 48, trend: 'stable', lastAssessed: '45 menit lalu', description: 'Drainase tersumbat, ketinggian air 30cm.' },
  { id: 'RSK-006', area: 'PDAM Intake Sungai Tabuk', type: 'Kontaminasi Air', level: 'low', score: 32, trend: 'down', lastAssessed: '2 jam lalu', description: 'Turbiditas meningkat, masih dalam ambang batas.' },
]
