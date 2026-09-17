/* ============================================================
   DATA DETAIL UNTUK MODAL
   ============================================================ */
const MODAL_DATA = {
  /* ===== PROJECTS ===== */
  'project-1': {
    icon: '☁️',
    title: 'Cloud Web Deployment & System Administration (UKK)',
    subtitle: 'Ubuntu 24.04 LTS · Nginx · Apache · SSL',
    gallery: [
      'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&auto=format&fit=crop'
    ],
    body: `
      <p>Proyek Uji Kompetensi Keahlian (UKK) yang berfokus pada <strong>deployment dan administrasi server</strong> untuk menjalankan layanan web produksi.</p>
      <p><strong>Apa yang saya kerjakan:</strong></p>
      <ul>
        <li>Menyewa dan mengonfigurasi VPS / EC2 instance berbasis Ubuntu 24.04 LTS</li>
        <li>Instalasi &amp; konfigurasi Nginx sebagai reverse proxy dan Apache sebagai web server</li>
        <li>Domain pointing (subdomain) ke IP publik server</li>
        <li>Implementasi HTTPS/SSL menggunakan Let's Encrypt (Certbot) untuk koneksi aman</li>
        <li>Firewall &amp; hardening dasar server</li>
      </ul>
      <p><strong>Hasil:</strong> Website dapat diakses publik via HTTPS dengan performa stabil.</p>
    `,
    tags: ['Ubuntu', 'Nginx', 'Apache', 'SSL', 'VPS', 'AWS EC2']
  },

  'project-2': {
    icon: '🐳',
    title: 'Wishlist & Library App — Docker Deployment',
    subtitle: 'Docker · Docker Compose · PostgreSQL · Redis',
    gallery: [
      'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&auto=format&fit=crop'
    ],
    body: `
      <p>Aplikasi web <strong>Wishlist &amp; Library</strong> yang dibangun dengan arsitektur <strong>multi-container</strong> menggunakan Docker Compose.</p>
      <p><strong>Stack:</strong></p>
      <ul>
        <li><strong>Frontend:</strong> HTML, CSS, JavaScript</li>
        <li><strong>Backend:</strong> Python (Flask/FastAPI)</li>
        <li><strong>Database:</strong> PostgreSQL untuk data utama</li>
        <li><strong>Cache:</strong> Redis untuk session &amp; caching</li>
      </ul>
      <p><strong>Yang saya pelajari:</strong> Menulis Dockerfile kustom, mengatur jaringan antar container, mengelola volume persisten &amp; bind mount, serta orkestrasi service dengan <code>docker-compose.yml</code>.</p>
    `,
    tags: ['Docker', 'Docker Compose', 'Python', 'PostgreSQL', 'Redis']
  },

  'project-3': {
    icon: '🚀',
    title: 'Cloud Publishing & AWS Integration',
    subtitle: 'Docker Hub · AWS EC2 · Microservices',
    gallery: [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&auto=format&fit=crop'
    ],
    body: `
      <p>Proyek publish image Docker ke <strong>Docker Hub</strong> dan deploy aplikasi microservices ke <strong>AWS EC2</strong>.</p>
      <ul>
        <li>Build &amp; tag Docker image kustom</li>
        <li>Push image ke Docker Hub registry</li>
        <li>Pull &amp; run di EC2 instance Ubuntu</li>
        <li>Konfigurasi Security Group (port HTTP/HTTPS/SSH)</li>
        <li>Health check &amp; monitoring dasar</li>
      </ul>
      <p>Pelajaran penting: pentingnya <strong>tagging image</strong> yang rapi dan manajemen port yang jelas untuk deployment yang dapat direproduksi.</p>
    `,
    tags: ['AWS EC2', 'Docker Hub', 'Security Group', 'Microservices']
  },

  'project-4': {
    icon: '🛡️',
    title: 'Network Security & Penetration Testing',
    subtitle: 'Kali Linux · Metasploit · Ubuntu/Debian Target',
    gallery: [
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&auto=format&fit=crop'
    ],
    body: `
      <p>Simulasi <strong>penetration testing</strong> pada lingkungan lab menggunakan Kali Linux sebagai sistem penyerang dan Ubuntu/Debian sebagai target.</p>
      <ul>
        <li>Scanning port &amp; service dengan Nmap</li>
        <li>Identifikasi kerentanan pada service yang berjalan</li>
        <li>Eksploitasi menggunakan Metasploit Framework</li>
        <li>Dokumentasi celah keamanan &amp; langkah mitigasi</li>
      </ul>
      <p><strong>Catatan etika:</strong> Semua pengujian dilakukan di lingkungan lab pribadi dengan izin penuh — tidak ada target produksi yang dieksploitasi.</p>
    `,
    tags: ['Kali Linux', 'Metasploit', 'Nmap', 'Security', 'Ethical Hacking']
  },

  /* ===== EXPERIENCE ===== */
  'exp-1': {
    icon: '💻',
    title: 'Komunitas IT SMK Negeri — KITS',
    subtitle: '2025 – 2026',
    gallery: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop'
    ],
    body: `
      <p>Komunitas IT di sekolah yang menjadi wadah pengembangan skill teknologi bagi siswa.</p>
      <p><strong>Peran saya:</strong></p>
      <ul>
        <li><strong>Anggota Seksi Multimedia:</strong> dokumentasi &amp; konten visual kegiatan komunitas</li>
        <li><strong>Sekretaris Formatur:</strong> mengelola administrasi pembentukan kepengurusan</li>
        <li><strong>Wakil Ketua Pelaksana SBM (Feb 2026):</strong> mengoordinasi seluruh rangkaian acara</li>
        <li><strong>Penanggung Jawab Sie Multimedia:</strong> memimpin tim multimedia dalam berbagai program kerja</li>
        <li><strong>MC internal:</strong> memandu jalannya acara komunitas</li>
      </ul>
    `,
    tags: ['Multimedia', 'Leadership', 'Event Organizer', 'Public Speaking']
  },

  'exp-2': {
    icon: '🎯',
    title: 'Organisasi SMP Negeri',
    subtitle: '2022 – 2024',
    gallery: [
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop'
    ],
    body: `
      <p>Pengalaman berorganisasi di jenjang SMP yang membentuk <strong>kepemimpinan, kedisiplinan, dan kepedulian sosial</strong>.</p>
      <ul>
        <li><strong>OSIS — Bendahara &amp; Plt. Pendukung Pimpinan (2023–2024):</strong> mengelola keuangan organisasi, menyusun laporan, serta mengambil alih koordinasi saat ketua/wakil tidak hadir.</li>
        <li><strong>Kader Adiwiyata (2023–2024):</strong> aktif dalam program kebersihan, pengelolaan sampah, penghijauan, dan pelestarian lingkungan.</li>
        <li><strong>Pramuka (2022–2024):</strong> mengikuti latihan kepemimpinan, kedisiplinan, dan berbagai kegiatan perkemahan.</li>
        <li><strong>Satgas Anti Narkoba — Ketua (2024):</strong> memimpin kampanye pencegahan penyalahgunaan narkoba di sekolah.</li>
        <li><strong>PMR — Sekretaris (2022–2023):</strong> administrasi &amp; mendukung program aksi sosial kesehatan.</li>
      </ul>
    `,
    tags: ['Leadership', 'Kepemimpinan', 'Sosial', 'Administrasi', 'Organisasi']
  },

  /* ===== HARD SKILLS ===== */
  'skill-docker': {
    icon: '🐳',
    title: 'Docker & Docker Compose',
    subtitle: 'Containerization & Orchestration',
    gallery: [
      'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&auto=format&fit=crop'
    ],
    body: `
      <p>Penguasaan <strong>Docker</strong> untuk containerization aplikasi, mencakup:</p>
      <ul>
        <li>Menulis Dockerfile kustom (multi-stage build)</li>
        <li>Mengelola image, container, volume, dan network</li>
        <li>Orkestrasi multi-container dengan Docker Compose</li>
        <li>Publish image ke Docker Hub</li>
      </ul>
      <p>Digunakan di berbagai proyek: Wishlist App, deploy microservices ke AWS EC2.</p>
    `,
    tags: ['Docker', 'Dockerfile', 'Docker Compose', 'DevOps']
  },

  'skill-aws': {
    icon: '☁️',
    title: 'AWS (EC2, RDS, S3)',
    subtitle: 'Cloud Computing',
    gallery: [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop'
    ],
    body: `
      <p>Pemahaman layanan cloud AWS untuk deployment aplikasi:</p>
      <ul>
        <li><strong>EC2:</strong> provisioning &amp; konfigurasi instance Ubuntu</li>
        <li><strong>RDS:</strong> managed database (MySQL/PostgreSQL)</li>
        <li><strong>S3:</strong> object storage untuk aset statis</li>
        <li><strong>Security Groups &amp; Load Balancing</strong></li>
      </ul>
    `,
    tags: ['AWS', 'EC2', 'RDS', 'S3', 'Cloud']
  },

  'skill-linux': {
    icon: '🐧',
    title: 'Linux Ubuntu Server',
    subtitle: 'System Administration',
    gallery: [
      'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&auto=format&fit=crop'
    ],
    body: `
      <p>Administrasi sistem Linux Ubuntu Server, mencakup:</p>
      <ul>
        <li>Manajemen user, permission, dan package</li>
        <li>Konfigurasi service (systemd)</li>
        <li>Logging &amp; monitoring dasar</li>
        <li>Hardening &amp; firewall (ufw/iptables)</li>
      </ul>
    `,
    tags: ['Linux', 'Ubuntu', 'SysAdmin', 'Server']
  },

  'skill-webserver': {
    icon: '🌐',
    title: 'Nginx & Apache',
    subtitle: 'Web Server Configuration',
    gallery: [
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&auto=format&fit=crop'
    ],
    body: `
      <p>Konfigurasi &amp; pengelolaan web server produksi:</p>
      <ul>
        <li>Virtual host / server block</li>
        <li>Reverse proxy &amp; load balancing</li>
        <li>SSL/TLS dengan Let's Encrypt</li>
        <li>Port management &amp; domain pointing</li>
      </ul>
    `,
    tags: ['Nginx', 'Apache', 'Reverse Proxy', 'SSL']
  },

  'skill-db': {
    icon: '🗄️',
    title: 'PostgreSQL & MySQL',
    subtitle: 'Database Management',
    gallery: [
      'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&auto=format&fit=crop'
    ],
    body: `
      <p>Perancangan &amp; pengelolaan database relasional:</p>
      <ul>
        <li>Desain skema &amp; normalisasi data</li>
        <li>Penulisan query SQL (SELECT, JOIN, subquery, aggregasi)</li>
        <li>Backup &amp; restore database</li>
        <li>User management &amp; permission</li>
      </ul>
    `,
    tags: ['PostgreSQL', 'MySQL', 'SQL', 'Database']
  },

  'skill-redis': {
    icon: '⚡',
    title: 'Redis',
    subtitle: 'In-Memory Data Store',
    gallery: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop'
    ],
    body: `
      <p>Penggunaan Redis sebagai cache &amp; session store:</p>
      <ul>
        <li>Key-value storage untuk caching</li>
        <li>Session management aplikasi web</li>
        <li>Integrasi dengan backend Python/Node.js</li>
      </ul>
    `,
    tags: ['Redis', 'Cache', 'Session']
  },

  'skill-frontend': {
    icon: '🎨',
    title: 'HTML, CSS, JavaScript',
    subtitle: 'Front-End Development',
    gallery: [
      'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&auto=format&fit=crop'
    ],
    body: `
      <p>Pengembangan antarmuka web yang interaktif &amp; responsif:</p>
      <ul>
        <li>HTML5 semantik &amp; aksesibilitas</li>
        <li>CSS3: Flexbox, Grid, animasi, variabel CSS</li>
        <li>JavaScript: DOM manipulation, event handling, fetch API</li>
        <li>Responsive design untuk mobile &amp; desktop</li>
      </ul>
    `,
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive']
  },

  'skill-python': {
    icon: '🐍',
    title: 'Python',
    subtitle: 'Backend & Scripting',
    gallery: [
      'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&auto=format&fit=crop'
    ],
    body: `
      <p>Penggunaan Python untuk backend web &amp; scripting:</p>
      <ul>
        <li>Framework Flask / FastAPI untuk REST API</li>
        <li>Integrasi dengan database PostgreSQL</li>
        <li>Scripting otomasi &amp; data processing</li>
      </ul>
    `,
    tags: ['Python', 'Flask', 'Backend', 'API']
  },

  'skill-network': {
    icon: '📡',
    title: 'MikroTik & Routing',
    subtitle: 'Networking',
    gallery: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop'
    ],
    body: `
      <p>Konfigurasi jaringan dengan perangkat MikroTik:</p>
      <ul>
        <li>Routing &amp; static route</li>
        <li>Wireless setup &amp; bandwidth management</li>
        <li>IP addressing &amp; DHCP server</li>
        <li>Firewall &amp; NAT</li>
      </ul>
      <p>Diperkuat dengan bootcamp MTCNA (MikroTik Certified Network Associate).</p>
    `,
    tags: ['MikroTik', 'Routing', 'Networking', 'MTCNA']
  },

  'skill-security': {
    icon: '🛡️',
    title: 'Kali Linux & Metasploit',
    subtitle: 'Network Security',
    gallery: [
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop'
    ],
    body: `
      <p>Pengujian keamanan &amp; penetration testing:</p>
      <ul>
        <li>Reconnaissance dengan Nmap</li>
        <li>Exploitasi dengan Metasploit Framework</li>
        <li>Analisis kerentanan sistem</li>
        <li>Dokumentasi &amp; mitigasi</li>
      </ul>
    `,
    tags: ['Kali Linux', 'Metasploit', 'Security', 'Pentest']
  },

  'skill-git': {
    icon: '🔀',
    title: 'Git & GitHub',
    subtitle: 'Version Control',
    gallery: [
      'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&auto=format&fit=crop'
    ],
    body: `
      <p>Manajemen versi kode dengan Git &amp; kolaborasi via GitHub:</p>
      <ul>
        <li>Commit, branch, merge, rebase</li>
        <li>Pull request &amp; code review</li>
        <li>Repository management</li>
        <li>SSH key &amp; terminal workflow</li>
      </ul>
    `,
    tags: ['Git', 'GitHub', 'Version Control']
  },

  'skill-hardware': {
    icon: '🔌',
    title: 'Crimping & Fusion Splicer',
    subtitle: 'Hardware & Infrastructure',
    gallery: [
      'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&auto=format&fit=crop'
    ],
    body: `
      <p>Keahlian teknis lapangan untuk infrastruktur jaringan:</p>
      <ul>
        <li>Crimping kabel UTP (straight &amp; crossover)</li>
        <li>Pemasangan konektor RJ45</li>
        <li>Instalasi fiber optic dengan Fusion Splicer</li>
        <li>Pengujian kabel dengan LAN tester</li>
      </ul>
    `,
    tags: ['Hardware', 'Networking', 'Fiber Optic']
  },

  /* ===== SOFT SKILLS ===== */
  'soft-leadership': {
    icon: '👑',
    title: 'Leadership',
    subtitle: 'Soft Skill',
    gallery: [],
    body: `
      <p>Berpengalaman <strong>memimpin organisasi</strong> dan mengelola berbagai program kerja.</p>
      <ul>
        <li>Ketua Satgas Anti Narkoba SMP (2024)</li>
        <li>Wakil Ketua Pelaksana SBM — KITS (2026)</li>
        <li>Penanggung Jawab Sie Multimedia — KITS</li>
      </ul>
      <p>Mampu mengambil keputusan, mendelegasikan tugas, dan mengoordinasi tim menuju target bersama.</p>
    `,
    tags: ['Leadership', 'Organisasi']
  },

  'soft-communication': {
    icon: '💬',
    title: 'Communication',
    subtitle: 'Soft Skill',
    gallery: [],
    body: `
      <p>Kemampuan <strong>komunikasi yang baik</strong>, baik lisan maupun tulisan:</p>
      <ul>
        <li>MC berbagai acara internal sekolah</li>
        <li>Sekretaris formatur &amp; administrasi organisasi</li>
        <li>Presentasi hasil proyek &amp; laporan</li>
      </ul>
    `,
    tags: ['Communication', 'Public Speaking']
  },

  'soft-teamwork': {
    icon: '🤝',
    title: 'Teamwork & Coordination',
    subtitle: 'Soft Skill',
    gallery: [],
    body: `
      <p>Mampu <strong>bekerja sama dalam tim</strong> serta mengoordinasikan kegiatan dan anggota:</p>
      <ul>
        <li>Kolaborasi lintas divisi di KITS</li>
        <li>Koordinasi program kerja bersama pengurus OSIS</li>
        <li>Sinergi tim dalam proyek teknis (UKK, Docker, AWS)</li>
      </ul>
    `,
    tags: ['Teamwork', 'Coordination']
  },

  'soft-fastlearner': {
    icon: '🚀',
    title: 'Fast Learner & Responsibility',
    subtitle: 'Soft Skill',
    gallery: [],
    body: `
      <p>Cepat mempelajari hal baru serta bertanggung jawab menyelesaikan tugas sesuai target:</p>
      <ul>
        <li>Menguasai Docker &amp; AWS dari nol dalam hitungan minggu</li>
        <li>Menyelesaikan sertifikasi Network, Linux, VM, dan PNETLab</li>
        <li>Mengambil alih tugas yang tidak terduga dengan sigap</li>
      </ul>
    `,
    tags: ['Fast Learner', 'Responsibility']
  },

  'soft-responsibility': {
    icon: '✅',
    title: 'Responsibility',
    subtitle: 'Soft Skill',
    gallery: [],
    body: `
      <p>Bertanggung jawab penuh atas tugas yang diemban, dari perencanaan hingga evaluasi.</p>
      <ul>
        <li>Menyelesaikan seluruh program kerja tepat waktu</li>
        <li>Menjaga amanah sebagai bendahara &amp; sekretaris</li>
        <li>Disiplin dalam laporan &amp; dokumentasi</li>
      </ul>
    `,
    tags: ['Responsibility', 'Discipline']
  },

  /* ===== ACHIEVEMENTS ===== */
  'ach-1': {
    icon: '🏆',
    title: 'Juara 1 Paralel Kelas 9',
    subtitle: 'SMP Negeri · 2025',
    gallery: [
      'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&auto=format&fit=crop'
    ],
    body: `
      <p>Meraih <strong>peringkat pertama paralel kelas 9</strong> berdasarkan nilai akademik di SMP Negeri.</p>
      <p>Pencapaian ini adalah hasil dari konsistensi belajar, manajemen waktu yang baik, serta keseimbangan antara akademik dan organisasi.</p>
    `,
    tags: ['Akademik', 'Prestasi']
  },

  'ach-2': {
    icon: '🥈',
    title: 'Juara Tingkat Kabupaten',
    subtitle: 'Agustus 2024',
    gallery: [
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&auto=format&fit=crop'
    ],
    body: `
      <p>Meraih juara di <strong>tingkat kabupaten</strong> pada kompetisi yang diselenggarakan Agustus 2024.</p>
      <p>Kompetisi ini mengasah kemampuan analisis, kerja keras, dan mental bertanding.</p>
    `,
    tags: ['Kompetisi', 'Kabupaten']
  },

  'ach-3': {
    icon: '🥉',
    title: 'Juara 3 Penggalang se-Jawa Timur',
    subtitle: '2024',
    gallery: [
      'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=600&auto=format&fit=crop'
    ],
    body: `
      <p>Meraih <strong>Juara 3 tingkat Penggalang se-Jawa Timur</strong> dalam kegiatan Pramuka (2024).</p>
      <p>Melibatkan keterampilan tali-temali, pionering, kepemimpinan, dan kerja sama regu.</p>
    `,
    tags: ['Pramuka', 'Penggalang', 'Jawa Timur']
  },

  /* ===== CERTIFICATIONS ===== */
  'cert-1': {
    icon: '📜',
    title: 'Network Fundamental',
    subtitle: 'Aguna Course',
    gallery: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop'
    ],
    body: `
      <p>Sertifikasi <strong>Network Fundamental</strong> dari Aguna Course.</p>
      <p>Mencakup dasar-dasar jaringan komputer: OSI layer, TCP/IP, subnetting, routing, dan troubleshooting dasar.</p>
    `,
    tags: ['Sertifikasi', 'Networking']
  },

  'cert-2': {
    icon: '📜',
    title: 'Linux Fundamental',
    subtitle: 'Aguna Course',
    gallery: [
      'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&auto=format&fit=crop'
    ],
    body: `
      <p>Sertifikasi <strong>Linux Fundamental</strong> dari Aguna Course.</p>
      <p>Materi: struktur filesystem, manajemen user &amp; permission, package management, shell scripting dasar.</p>
    `,
    tags: ['Sertifikasi', 'Linux']
  },

  'cert-3': {
    icon: '📜',
    title: 'Virtual Machine Fundamental',
    subtitle: 'Aguna Course',
    gallery: [
      'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&auto=format&fit=crop'
    ],
    body: `
      <p>Sertifikasi <strong>Virtual Machine Fundamental</strong> dari Aguna Course.</p>
      <p>Materi: konsep virtualisasi, hypervisor, setup VM, dan resource allocation untuk server.</p>
    `,
    tags: ['Sertifikasi', 'Virtualization']
  },

  'cert-4': {
    icon: '📜',
    title: 'Simulasi Jaringan dengan PNETLab',
    subtitle: 'Aguna Course',
    gallery: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop'
    ],
    body: `
      <p>Sertifikasi <strong>Simulasi Jaringan dengan PNETLab</strong>.</p>
      <p>Membangun topologi jaringan virtual untuk latihan konfigurasi router &amp; switch tanpa hardware fisik.</p>
    `,
    tags: ['Sertifikasi', 'PNETLab', 'Networking']
  },

  'cert-5': {
    icon: '📜',
    title: 'Belajar HTML, CSS, JavaScript',
    subtitle: 'freeCodeCamp',
    gallery: [
      'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&auto=format&fit=crop'
    ],
    body: `
      <p>Sertifikasi <strong>Responsive Web Design</strong> dari freeCodeCamp.</p>
      <p>Mencakup HTML5, CSS3 (Flexbox, Grid), serta dasar-dasar JavaScript untuk membangun halaman web responsif.</p>
    `,
    tags: ['Sertifikasi', 'HTML', 'CSS', 'JavaScript', 'freeCodeCamp']
  },

  'cert-6': {
    icon: '🎓',
    title: 'Bootcamp MTCNA (MikroTik Certified Network Associate)',
    subtitle: 'MikroTik · 2026',
    gallery: [
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&auto=format&fit=crop'
    ],
    body: `
      <p><strong>Bootcamp MTCNA</strong> — pelatihan intensif jaringan komputer dan konfigurasi router MikroTik (2026).</p>
      <ul>
        <li>Routing &amp; static route</li>
        <li>Wireless setup</li>
        <li>Firewall &amp; NAT</li>
        <li>Bandwidth management</li>
        <li>IP addressing &amp; DHCP</li>
      </ul>
    `,
    tags: ['MikroTik', 'MTCNA', 'Networking']
  }
};

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initScrollEffects();
  initMobileMenu();
  initReveal();
  initProjectTilt();
  initActiveNav();
  initModal();
  setFooterYear();
});

/* ============================================================
   NAVBAR SCROLL + PROGRESS BAR
   ============================================================ */
function initScrollEffects() {
  const navbar = document.getElementById('navbar');
  const progressBar = document.getElementById('progressBar');

  const handleScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
    const winHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = winHeight > 0 ? (window.scrollY / winHeight) * 100 : 0;
    progressBar.style.width = progress + '%';
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ============================================================
   MOBILE MENU
   ============================================================ */
function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    menuToggle.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.classList.remove('open');
    });
  });
}

/* ============================================================
   REVEAL ON SCROLL
   ============================================================ */
function initReveal() {
  const reveals = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('active'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  reveals.forEach(el => observer.observe(el));
}

/* ============================================================
   PROJECT CARD TILT GLOW
   ============================================================ */
function initProjectTilt() {
  document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mx', x + '%');
      card.style.setProperty('--my', y + '%');
    });
  });
}

/* ============================================================
   ACTIVE NAV LINK ON SCROLL
   ============================================================ */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');

  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navAnchors.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
}

/* ============================================================
   FOOTER YEAR
   ============================================================ */
function setFooterYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* ============================================================
   MODAL SYSTEM
   ============================================================ */
function initModal() {
  const overlay = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('modalClose');
  const iconEl = document.getElementById('modalIcon');
  const titleEl = document.getElementById('modalTitle');
  const subEl = document.getElementById('modalSub');
  const galleryEl = document.getElementById('modalGallery');
  const bodyEl = document.getElementById('modalBody');
  const tagsEl = document.getElementById('modalTags');

  /* --- Buka modal --- */
  function openModal(key) {
    const data = MODAL_DATA[key];
    if (!data) return;

    // Isi konten
    iconEl.textContent = data.icon || '📁';
    titleEl.textContent = data.title || '';
    subEl.textContent = data.subtitle || '';
    bodyEl.innerHTML = data.body || '';

    // Galeri
    galleryEl.innerHTML = '';
    if (Array.isArray(data.gallery) && data.gallery.length > 0) {
      data.gallery.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = data.title;
        img.loading = 'lazy';
        img.addEventListener('click', () => window.open(url, '_blank'));
        galleryEl.appendChild(img);
      });
    }

    // Tags
    tagsEl.innerHTML = '';
    if (Array.isArray(data.tags)) {
      data.tags.forEach(tag => {
        const s = document.createElement('span');
        s.textContent = tag;
        tagsEl.appendChild(s);
      });
    }

    // Tampilkan
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    // Reset scroll
    const scrollEl = overlay.querySelector('.modal-scroll');
    if (scrollEl) scrollEl.scrollTop = 0;
  }

  /* --- Tutup modal --- */
  function closeModal() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  /* --- Event: klik item yang punya data-modal --- */
  document.querySelectorAll('[data-modal]').forEach(el => {
    el.addEventListener('click', (e) => {
      // Hindari klik pada link / tombol di dalamnya
      if (e.target.closest('a, button')) return;
      openModal(el.dataset.modal);
    });
  });

  /* --- Event: tutup --- */
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
  });
}