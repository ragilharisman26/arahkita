/* =========================================================
   ARAHKITA V3
   ANALISIS POTENSI MAHASISWA — NON-AI
========================================================= */


/* =========================================================
   DATA MATA KULIAH
========================================================= */

let courses = [];


/* =========================================================
   GRADE
========================================================= */

const gradeWeight = {

    "A": 100,
    "A-": 92,
    "B+": 87,
    "B": 82,
    "B-": 77,
    "C+": 72,
    "C": 67,
    "D": 55,
    "E": 40

};


/* =========================================================
   KATEGORI BIDANG
========================================================= */

const categories = {

    technology: {
        name: "Teknologi & Digital",
        description:
            "Kamu menunjukkan kecenderungan kuat pada pemecahan masalah, teknologi, logika, dan pengembangan sistem.",
        careers: [
            ["Web Developer", "Membangun dan mengembangkan website."],
            ["Data Analyst", "Mengolah data untuk menemukan pola dan insight."],
            ["Software Developer", "Membangun aplikasi dan sistem digital."],
            ["IT Support", "Membantu menyelesaikan masalah teknologi."],
            ["UI/UX Designer", "Merancang pengalaman dan tampilan produk digital."]
        ],
        skills: [
            "Problem Solving",
            "Digital Literacy",
            "Data Analysis",
            "Programming",
            "Logical Thinking"
        ]
    },

    business: {
        name: "Bisnis & Manajemen",
        description:
            "Kamu memiliki kecenderungan pada pengelolaan organisasi, strategi, bisnis, perencanaan, dan pengambilan keputusan.",
        careers: [
            ["Business Development", "Mengembangkan peluang dan pertumbuhan bisnis."],
            ["Business Analyst", "Menganalisis kebutuhan dan proses bisnis."],
            ["Management Trainee", "Mengembangkan kemampuan manajerial lintas bidang."],
            ["Entrepreneur", "Membangun dan mengembangkan usaha."],
            ["Project Manager", "Mengelola proyek, waktu, dan sumber daya."]
        ],
        skills: [
            "Leadership",
            "Business Strategy",
            "Planning",
            "Decision Making",
            "Communication"
        ]
    },

    finance: {
        name: "Keuangan & Akuntansi",
        description:
            "Kamu cenderung nyaman dengan angka, ketelitian, pencatatan, analisis keuangan, dan pengambilan keputusan berbasis data.",
        careers: [
            ["Financial Analyst", "Menganalisis kondisi dan performa keuangan."],
            ["Accountant", "Mengelola pencatatan dan laporan keuangan."],
            ["Auditor", "Memeriksa informasi dan proses keuangan."],
            ["Tax Specialist", "Mendalami administrasi dan perpajakan."],
            ["Finance Staff", "Mendukung pengelolaan keuangan organisasi."]
        ],
        skills: [
            "Financial Analysis",
            "Attention to Detail",
            "Numerical Thinking",
            "Excel",
            "Critical Thinking"
        ]
    },

    creative: {
        name: "Kreatif & Komunikasi",
        description:
            "Kamu menunjukkan kecenderungan pada ide, komunikasi, kreativitas, visual, storytelling, dan pembuatan konten.",
        careers: [
            ["Content Creator", "Membuat dan mengembangkan konten digital."],
            ["Copywriter", "Menghasilkan tulisan untuk komunikasi dan pemasaran."],
            ["Graphic Designer", "Membuat konsep visual dan desain."],
            ["Social Media Specialist", "Mengelola komunikasi melalui media sosial."],
            ["Creative Strategist", "Mengembangkan ide kreatif untuk sebuah brand."]
        ],
        skills: [
            "Creativity",
            "Communication",
            "Storytelling",
            "Content Creation",
            "Visual Thinking"
        ]
    },

    people: {
        name: "Manusia & Pelayanan",
        description:
            "Kamu cenderung menikmati interaksi dengan orang lain, membantu, berkomunikasi, dan membangun hubungan.",
        careers: [
            ["Human Resources", "Mengelola dan mengembangkan sumber daya manusia."],
            ["Customer Relations", "Membangun hubungan baik dengan pelanggan."],
            ["Public Relations", "Mengelola komunikasi dan hubungan organisasi."],
            ["Recruiter", "Mencari dan menyeleksi kandidat."],
            ["Trainer", "Membantu orang lain mengembangkan kemampuan."]
        ],
        skills: [
            "Empathy",
            "Communication",
            "Teamwork",
            "Negotiation",
            "Public Speaking"
        ]
    },

    research: {
        name: "Riset & Analisis",
        description:
            "Kamu menunjukkan kecenderungan untuk memahami masalah secara mendalam, mencari pola, dan membuat keputusan berdasarkan informasi.",
        careers: [
            ["Research Assistant", "Mendukung kegiatan penelitian dan pengumpulan data."],
            ["Market Researcher", "Menganalisis perilaku dan kebutuhan pasar."],
            ["Data Researcher", "Mengolah informasi untuk menghasilkan temuan."],
            ["Policy Analyst", "Menganalisis kebijakan dan dampaknya."],
            ["Research Analyst", "Mengkaji data untuk menghasilkan rekomendasi."]
        ],
        skills: [
            "Research",
            "Critical Thinking",
            "Data Interpretation",
            "Problem Solving",
            "Analytical Thinking"
        ]
    },

    tourism: {
        name: "Pariwisata & Hospitality",
        description:
            "Kamu memiliki kecenderungan pada pelayanan, pengalaman pelanggan, komunikasi, pengelolaan kegiatan, dan industri pariwisata.",
        careers: [
            ["Tourism Planner", "Merancang kegiatan dan pengalaman wisata."],
            ["Hotel Staff", "Mendukung operasional dan pelayanan hotel."],
            ["Event Organizer", "Merancang dan mengelola kegiatan."],
            ["Travel Consultant", "Membantu merencanakan perjalanan."],
            ["Guest Relations", "Menjaga pengalaman dan hubungan dengan tamu."]
        ],
        skills: [
            "Hospitality",
            "Communication",
            "Event Management",
            "Customer Service",
            "Organization"
        ]
    }

};


/* =========================================================
   KATA KUNCI MATA KULIAH
========================================================= */

const courseKeywords = {

    technology: [
        "informatika",
        "komputer",
        "pemrograman",
        "programming",
        "coding",
        "basis data",
        "database",
        "jaringan",
        "sistem informasi",
        "teknologi",
        "web",
        "software",
        "algoritma",
        "data mining",
        "machine learning",
        "kecerdasan buatan",
        "statistika"
    ],

    business: [
        "manajemen",
        "bisnis",
        "kewirausahaan",
        "entrepreneur",
        "strategi",
        "pemasaran",
        "marketing",
        "organisasi",
        "kepemimpinan",
        "operasional",
        "sumber daya manusia",
        "sdm",
        "perilaku organisasi",
        "ekonomi"
    ],

    finance: [
        "akuntansi",
        "keuangan",
        "finansial",
        "perpajakan",
        "pajak",
        "audit",
        "auditing",
        "perbankan",
        "investasi",
        "anggaran",
        "laporan keuangan",
        "cost accounting"
    ],

    creative: [
        "desain",
        "grafis",
        "komunikasi",
        "public speaking",
        "bahasa",
        "seni",
        "kreatif",
        "multimedia",
        "fotografi",
        "videografi",
        "periklanan",
        "content",
        "copywriting"
    ],

    people: [
        "psikologi",
        "sosiologi",
        "human resource",
        "sumber daya manusia",
        "pelayanan",
        "komunikasi",
        "konseling",
        "pendidikan",
        "hubungan masyarakat",
        "public relations"
    ],

    research: [
        "metodologi penelitian",
        "penelitian",
        "riset",
        "statistika",
        "statistik",
        "analisis data",
        "ekonomi",
        "laboratorium",
        "metode",
        "data analysis"
    ],

    tourism: [
        "pariwisata",
        "tourism",
        "hospitality",
        "perhotelan",
        "hotel",
        "travel",
        "wisata",
        "event",
        "guiding",
        "hospitality management",
        "destinasi"
    ]

};


/* =========================================================
   PERTANYAAN
========================================================= */

const questions = [

    {
        category: "Gaya Berpikir",
        text: "Saat menghadapi masalah, saya biasanya...",
        answers: [
            {
                text: "Mencari pola dan data",
                scores: { technology: 3, research: 3, finance: 2 }
            },
            {
                text: "Membuat strategi",
                scores: { business: 3, finance: 2 }
            },
            {
                text: "Mencari ide baru",
                scores: { creative: 3, business: 2 }
            },
            {
                text: "Bertanya kepada orang lain",
                scores: { people: 3, tourism: 2 }
            },
            {
                text: "Mencoba langsung",
                scores: { technology: 2, tourism: 2, creative: 2 }
            }
        ]
    },

    {
        category: "Aktivitas",
        text: "Kegiatan kuliah yang paling menarik bagi saya adalah...",
        answers: [
            {
                text: "Mengolah data",
                scores: { research: 3, technology: 3, finance: 2 }
            },
            {
                text: "Mengatur proyek",
                scores: { business: 3, tourism: 2 }
            },
            {
                text: "Membuat desain",
                scores: { creative: 3, technology: 1 }
            },
            {
                text: "Berdiskusi",
                scores: { people: 3, business: 2 }
            },
            {
                text: "Melakukan praktik",
                scores: { tourism: 3, technology: 2 }
            }
        ]
    },

    {
        category: "Kerja",
        text: "Saya lebih nyaman bekerja...",
        answers: [
            {
                text: "Dengan data",
                scores: { research: 3, finance: 3 }
            },
            {
                text: "Dengan target",
                scores: { business: 3, finance: 2 }
            },
            {
                text: "Dengan ide",
                scores: { creative: 3 }
            },
            {
                text: "Dengan orang",
                scores: { people: 3, tourism: 2 }
            },
            {
                text: "Dengan teknologi",
                scores: { technology: 3 }
            }
        ]
    },

    {
        category: "Peran",
        text: "Dalam kerja kelompok saya sering menjadi...",
        answers: [
            {
                text: "Penganalisis",
                scores: { research: 3, technology: 2 }
            },
            {
                text: "Ketua",
                scores: { business: 3, people: 2 }
            },
            {
                text: "Pencetus ide",
                scores: { creative: 3 }
            },
            {
                text: "Penghubung tim",
                scores: { people: 3, tourism: 2 }
            },
            {
                text: "Pelaksana teknis",
                scores: { technology: 3, tourism: 1 }
            }
        ]
    },

    {
        category: "Minat",
        text: "Topik yang paling membuat saya penasaran...",
        answers: [
            {
                text: "Teknologi",
                scores: { technology: 4 }
            },
            {
                text: "Bisnis",
                scores: { business: 4 }
            },
            {
                text: "Keuangan",
                scores: { finance: 4 }
            },
            {
                text: "Kreativitas",
                scores: { creative: 4 }
            },
            {
                text: "Manusia",
                scores: { people: 4 }
            }
        ]
    },

    {
        category: "Pengambilan Keputusan",
        text: "Sebelum mengambil keputusan saya cenderung...",
        answers: [
            {
                text: "Melihat data",
                scores: { research: 3, finance: 3 }
            },
            {
                text: "Memikirkan strategi",
                scores: { business: 3 }
            },
            {
                text: "Mengikuti intuisi",
                scores: { creative: 3 }
            },
            {
                text: "Mempertimbangkan orang",
                scores: { people: 3 }
            },
            {
                text: "Mencoba dan mengevaluasi",
                scores: { technology: 3, tourism: 2 }
            }
        ]
    },

    {
        category: "Lingkungan",
        text: "Lingkungan kerja yang saya sukai...",
        answers: [
            {
                text: "Tenang dan fokus",
                scores: { research: 3, finance: 2 }
            },
            {
                text: "Cepat dan kompetitif",
                scores: { business: 3 }
            },
            {
                text: "Bebas dan kreatif",
                scores: { creative: 4 }
            },
            {
                text: "Banyak interaksi",
                scores: { people: 3, tourism: 3 }
            },
            {
                text: "Dinamis dan digital",
                scores: { technology: 3 }
            }
        ]
    },

    {
        category: "Kekuatan",
        text: "Orang lain biasanya melihat saya sebagai orang yang...",
        answers: [
            {
                text: "Logis",
                scores: { technology: 3, research: 3 }
            },
            {
                text: "Terorganisir",
                scores: { business: 3, finance: 2 }
            },
            {
                text: "Kreatif",
                scores: { creative: 4 }
            },
            {
                text: "Ramah",
                scores: { people: 4, tourism: 2 }
            },
            {
                text: "Teliti",
                scores: { finance: 3, research: 3 }
            }
        ]
    },

    {
        category: "Tantangan",
        text: "Saya justru menikmati tantangan ketika harus...",
        answers: [
            {
                text: "Memecahkan masalah",
                scores: { technology: 3, research: 3 }
            },
            {
                text: "Mencapai target",
                scores: { business: 4 }
            },
            {
                text: "Menciptakan sesuatu",
                scores: { creative: 4 }
            },
            {
                text: "Membantu orang",
                scores: { people: 4 }
            },
            {
                text: "Mengatur kegiatan",
                scores: { tourism: 3, business: 2 }
            }
        ]
    },

    {
        category: "Belajar",
        text: "Saya lebih mudah memahami sesuatu melalui...",
        answers: [
            {
                text: "Angka dan data",
                scores: { finance: 3, research: 3 }
            },
            {
                text: "Contoh dan praktik",
                scores: { technology: 3, tourism: 2 }
            },
            {
                text: "Visual",
                scores: { creative: 4 }
            },
            {
                text: "Diskusi",
                scores: { people: 3, business: 2 }
            },
            {
                text: "Membaca dan menganalisis",
                scores: { research: 3 }
            }
        ]
    },

    {
        category: "Masa Depan",
        text: "Pekerjaan ideal menurut saya adalah pekerjaan yang...",
        answers: [
            {
                text: "Berhubungan dengan teknologi",
                scores: { technology: 4 }
            },
            {
                text: "Membuat saya memimpin",
                scores: { business: 4 }
            },
            {
                text: "Memberi ruang berkarya",
                scores: { creative: 4 }
            },
            {
                text: "Banyak bertemu orang",
                scores: { people: 4, tourism: 2 }
            },
            {
                text: "Membutuhkan analisis",
                scores: { research: 4, finance: 2 }
            }
        ]
    }

];


/* =========================================================
   STATE PERTANYAAN
========================================================= */

let currentQuestion = 0;

let questionAnswers =
    new Array(questions.length).fill(null);


/* =========================================================
   SCORE
========================================================= */

function createScores() {

    return {

        technology: 0,
        business: 0,
        finance: 0,
        creative: 0,
        people: 0,
        research: 0,
        tourism: 0

    };

}


/* =========================================================
   PINDAH HALAMAN
========================================================= */

function showPage(pageId) {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active");

        });


    const page =
        document.getElementById(pageId);


    if (page) {

        page.classList.add("active");

    }


    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

}


/* =========================================================
   MULAI
========================================================= */

function startApp() {

    showPage("courses");

    renderCourses();

}


/* =========================================================
   TAMBAH MATA KULIAH
========================================================= */

function addCourse() {

    const nameInput =
        document.getElementById("courseName");

    const gradeInput =
        document.getElementById("courseGrade");


    const name =
        nameInput.value.trim();

    const grade =
        gradeInput.value;


    if (!name) {

        alert(
            "Masukkan nama mata kuliah terlebih dahulu."
        );

        nameInput.focus();

        return;

    }


    if (!grade) {

        alert(
            "Silakan pilih grade."
        );

        gradeInput.focus();

        return;

    }


    courses.push({

        name: name,
        grade: grade

    });


    nameInput.value = "";

    gradeInput.value = "";


    renderCourses();


    nameInput.focus();

}


/* =========================================================
   TAMPILKAN MATA KULIAH
========================================================= */

function renderCourses() {

    const list =
        document.getElementById("courseList");


    if (!courses.length) {

        list.innerHTML = `
            <div class="empty">
                Belum ada mata kuliah.
            </div>
        `;

        return;

    }


    list.innerHTML =
        courses.map((course, index) => {

            return `

                <div class="course-item">

                    <div>

                        <strong>
                            ${escapeHTML(course.name)}
                        </strong>

                        <span class="grade">
                            ${course.grade}
                        </span>

                    </div>

                    <button
                        class="remove"
                        onclick="removeCourse(${index})"
                    >
                        Hapus
                    </button>

                </div>

            `;

        }).join("");

}


/* =========================================================
   HAPUS MATA KULIAH
========================================================= */

function removeCourse(index) {

    courses.splice(index, 1);

    renderCourses();

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}


/* =========================================================
   RENDER PERTANYAAN
========================================================= */

function renderQuestion() {

    const question =
        questions[currentQuestion];


    const container =
        document.getElementById(
            "questionContainer"
        );


    const counter =
        document.getElementById(
            "questionCounter"
        );


    const progress =
        document.getElementById(
            "questionProgress"
        );


    counter.textContent =
        `${currentQuestion + 1} / ${questions.length}`;


    progress.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;


    let answerHTML = "";


    question.answers.forEach(
        (answer, index) => {

            const checked =
                questionAnswers[currentQuestion] === index
                    ? "checked"
                    : "";


            answerHTML += `

                <div>

                    <input
                        type="radio"
                        name="questionAnswer"
                        id="answer-${index}"
                        value="${index}"
                        ${checked}
                        onchange="selectAnswer(${index})"
                    >

                    <label for="answer-${index}">

                        ${escapeHTML(answer.text)}

                    </label>

                </div>

            `;

        }
    );


    container.innerHTML = `

        <div>

            <div class="question-category">
                ${escapeHTML(question.category)}
            </div>

            <div class="question-text">
                ${escapeHTML(question.text)}
            </div>

            <div class="answers">

                ${answerHTML}

            </div>

        </div>

    `;


    const backButton =
        document.querySelector(
            "#questions .actions .ghost"
        );


    const nextButton =
        document.querySelector(
            "#questions .actions .primary"
        );


    if (backButton) {

        backButton.style.visibility =
            currentQuestion === 0
                ? "hidden"
                : "visible";

    }


    if (nextButton) {

        nextButton.innerHTML =
            currentQuestion === questions.length - 1
                ? "Lihat Hasil →"
                : "Berikutnya →";

    }

}


/* =========================================================
   PILIH JAWABAN
========================================================= */

function selectAnswer(index) {

    questionAnswers[currentQuestion] =
        index;

}


/* =========================================================
   PERTANYAAN BERIKUTNYA
========================================================= */

function nextQuestion() {

    if (
        questionAnswers[currentQuestion] === null
    ) {

        alert(
            "Pilih salah satu jawaban terlebih dahulu."
        );

        return;

    }


    if (
        currentQuestion <
        questions.length - 1
    ) {

        currentQuestion++;

        renderQuestion();

        return;

    }


    startAnalysis();

}


/* =========================================================
   PERTANYAAN SEBELUMNYA
========================================================= */

function previousQuestion() {

    if (currentQuestion <= 0) {

        return;

    }


    currentQuestion--;

    renderQuestion();

}


/* =========================================================
   ANALISIS
========================================================= */

function startAnalysis() {

    showPage("analysis");


    const bar =
        document.getElementById(
            "analysisBar"
        );


    const percent =
        document.getElementById(
            "analysisPercent"
        );


    let value = 0;


    bar.style.width = "0%";

    percent.textContent = "0%";


    const interval =
        setInterval(() => {

            value += Math.floor(
                Math.random() * 8
            ) + 4;


            if (value >= 100) {

                value = 100;

            }


            bar.style.width =
                value + "%";


            percent.textContent =
                value + "%";


            if (value >= 100) {

                clearInterval(interval);


                setTimeout(() => {

                    generateResult();

                }, 500);

            }

        }, 120);

}


/* =========================================================
   HITUNG SKOR
========================================================= */

function calculateScores() {

    const scores =
        createScores();


    /*
       BAGIAN 1
       SCORE DARI JAWABAN
    */

    questionAnswers.forEach(
        (answerIndex, questionIndex) => {

            if (answerIndex === null) {

                return;

            }


            const answer =
                questions[questionIndex]
                    .answers[answerIndex];


            Object.entries(
                answer.scores
            ).forEach(
                ([category, value]) => {

                    scores[category] += value;

                }
            );

        }
    );


    /*
       BAGIAN 2
       SCORE DARI MATA KULIAH
    */

    courses.forEach(course => {

        const name =
            course.name.toLowerCase();

        const grade =
            gradeWeight[course.grade] || 0;


        Object.entries(
            courseKeywords
        ).forEach(
            ([category, keywords]) => {

                const matched =
                    keywords.some(keyword =>
                        name.includes(keyword)
                    );


                if (matched) {

                    /*
                       Grade tinggi memberi
                       pengaruh lebih besar.
                    */

                    scores[category] +=
                        Math.round(
                            grade / 20
                        );

                }

            }
        );

    });


    return scores;

}


/* =========================================================
   URUTKAN SKOR
========================================================= */

function sortScores(scores) {

    return Object.entries(scores)
        .sort((a, b) => b[1] - a[1]);

}


/* =========================================================
   BUAT HASIL
========================================================= */

function generateResult() {

    const scores =
        calculateScores();


    const ranking =
        sortScores(scores);


    const mainCategory =
        ranking[0][0];


    const secondCategory =
        ranking[1][0];


    const profile =
        categories[mainCategory];


    renderProfile(
        scores,
        ranking,
        mainCategory
    );


    renderCareers(
        mainCategory,
        secondCategory
    );


    renderSkills(
        mainCategory,
        secondCategory
    );


    renderCourseSummary();


    renderInsight(
        mainCategory,
        secondCategory,
        ranking
    );


    showPage("result");

}


/* =========================================================
   PROFIL UTAMA
========================================================= */

function renderProfile(
    scores,
    ranking,
    mainCategory
) {

    const profile =
        categories[mainCategory];


    document.getElementById(
        "profileName"
    ).textContent =
        profile.name;


    document.getElementById(
        "profileDescription"
    ).textContent =
        profile.description;


    const dimensions =
        document.getElementById(
            "profileDimensions"
        );


    const highest =
        Math.max(
            ...Object.values(scores)
        );


    dimensions.innerHTML =
        ranking.slice(0, 5)
            .map(([category, score]) => {

                const percentage =
                    highest > 0
                        ? Math.round(
                            (score / highest) * 100
                        )
                        : 0;


                return `

                    <div class="dimension">

                        <div class="dimension-top">

                            <span>
                                ${categories[category].name}
                            </span>

                            <span>
                                ${percentage}%
                            </span>

                        </div>

                        <div class="dimension-bar">

                            <div
                                style="width:${percentage}%"
                            ></div>

                        </div>

                    </div>

                `;

            }).join("");

}


/* =========================================================
   PEKERJAAN
========================================================= */

function renderCareers(
    mainCategory,
    secondCategory
) {

    const container =
        document.getElementById(
            "careerList"
        );


    const primary =
        categories[mainCategory].careers;


    const secondary =
        categories[secondCategory].careers;


    const careers = [

        ...primary.slice(0, 3),

        ...secondary.slice(0, 2)

    ];


    container.innerHTML =
        careers.map(career => {

            return `

                <div class="career">

                    <strong>
                        ${escapeHTML(career[0])}
                    </strong>

                    <p>
                        ${escapeHTML(career[1])}
                    </p>

                </div>

            `;

        }).join("");

}


/* =========================================================
   SKILL
========================================================= */

function renderSkills(
    mainCategory,
    secondCategory
) {

    const container =
        document.getElementById(
            "skillList"
        );


    const primary =
        categories[mainCategory].skills;


    const secondary =
        categories[secondCategory].skills;


    const skills = [
        ...primary.slice(0, 4),
        ...secondary.slice(0, 2)
    ];


    const uniqueSkills =
        [...new Set(skills)];


    container.innerHTML =
        uniqueSkills.map(skill => {

            return `

                <span class="skill">
                    ${escapeHTML(skill)}
                </span>

            `;

        }).join("");

}


/* =========================================================
   RINGKASAN MATA KULIAH
========================================================= */

function renderCourseSummary() {

    const container =
        document.getElementById(
            "courseSummary"
        );


    if (!courses.length) {

        container.innerHTML = `

            <div class="summary-item">

                <span>
                    Tidak ada mata kuliah yang dimasukkan.
                </span>

            </div>

        `;

        return;

    }


    container.innerHTML =
        courses.map(course => {

            return `

                <div class="summary-item">

                    <span>
                        ${escapeHTML(course.name)}
                    </span>

                    <span>
                        ${course.grade}
                    </span>

                </div>

            `;

        }).join("");

}


/* =========================================================
   INSIGHT
========================================================= */

function renderInsight(
    mainCategory,
    secondCategory,
    ranking
) {

    const element =
        document.getElementById(
            "resultInsight"
        );


    const main =
        categories[mainCategory];


    const second =
        categories[secondCategory];


    const gap =
        ranking[0][1] -
        ranking[1][1];


    let message = "";


    if (gap <= 2) {

        message = `
            Hasilmu cukup seimbang antara
            <strong>${main.name}</strong> dan
            <strong>${second.name}</strong>.
            Ini berarti kamu punya kombinasi
            potensi yang menarik dan tidak harus
            membatasi diri pada satu bidang saja.
            Coba eksplorasi pekerjaan yang
            menggabungkan kedua bidang tersebut.
        `;

    } else {

        message = `
            Kecenderungan terkuatmu saat ini adalah
            <strong>${main.name}</strong>, dengan
            <strong>${second.name}</strong> sebagai
            bidang pendukung.
            Gunakan hasil ini sebagai bahan
            eksplorasi, bukan sebagai penentu
            mutlak kariermu.
        `;

    }


    if (courses.length < 3) {

        message += `
            <br><br>
            Kamu baru memasukkan sedikit mata kuliah.
            Untuk gambaran yang lebih stabil,
            coba masukkan 5–10 mata kuliah.
        `;

    }


    element.innerHTML =
        message;

}


/* =========================================================
   RESTART
========================================================= */

function restartApp() {

    courses = [];

    currentQuestion = 0;

    questionAnswers =
        new Array(questions.length).fill(null);


    document.getElementById(
        "courseName"
    ).value = "";


    document.getElementById(
        "courseGrade"
    ).value = "";


    renderCourses();

    showPage("welcome");

}


/* =========================================================
   ENTER PADA INPUT
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const input =
            document.getElementById(
                "courseName"
            );


        if (input) {

            input.addEventListener(
                "keydown",
                event => {

                    if (
                        event.key === "Enter"
                    ) {

                        addCourse();

                    }

                }
            );

        }

    }
);
