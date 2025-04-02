import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(initReactI18next)
    .use(LanguageDetector) // 自動偵測語言
    .init({
        resources: {
            en: {
                translation: {
                    welcome: "Welcome to my website!",
                    home: "Home",
                    about: "About Me",
                    resume: "Resume",
                    portfolio: "Portfolio",
                    contact: "Feel free to contact me.",
                    view_portfolio: "View Portfolio",
                    intro: "Hi, I’m Jerry, born in Taichung, currently residing in Australia.",
                    study: "I’m studying a Master’s in Information Technology, majoring in Computer Science at Queensland University of Technology (QUT).",
                    study_strong: "Computer Science, Queensland University of Technology",

                    work: "Previously, I worked as a CIM Engineer at Siliconware Precision Industries (SPIL), specializing in manufacturing automation and data processing.",
                    work_strong: "CIM Engineer, Siliconware Precision Industries",

                    tech: "Along my tech journey, I’ve been deeply passionate about Machine Learning, Data Mining, Cloud Computing, and Web & Mobile Development, always looking for ways to apply technology to real-world challenges.",
                    tech_strong: "Machine Learning, Data Mining, Cloud Computing, Web & Mobile Development",

                    hobbies: "But life isn’t just about code — I thrive on the fast-paced rallies of badminton and the thrill of hiking through nature.",
                    hobbies_strong: "badminton, hiking",
                    motto: "Passionate about learning, always up for a challenge, and excited to connect with the world in meaningful ways!",
                    searchLabel: "Search Projects",
                    searchButton: "Search",
                    astronomy: "Astronomy Picture of the Day",
                    "resume": {
                        "title": "Resume",
                        "overview": {
                            "title": "Overview",
                            "content": "I am <strong>Yu-Chia-Sheng, KAO (Jerry)</strong>, currently studying a <strong>Master’s in Information Technology</strong> with a major in <strong>Computer Science</strong> at <strong>Queensland University of Technology (QUT)</strong>. I have experience in web and mobile application development, as well as cloud computing applications. Previously, I worked as a <strong>CIM Engineer</strong> at <strong>Siliconware Precision Industries (SPIL)</strong>, where I developed automation reports required for manufacturing. I am passionate about problem-solving and innovation, and I hope to apply technology to tackle real-world challenges."
                        },
                        "career": {
                            "title": "Career History",
                            "items": [
                                {
                                    "date": "2020/07 - 2022/09",
                                    "position": "<strong>CIM Engineer</strong>, <strong>Siliconware Precision Industries (SPIL)</strong>",
                                    "details": [
                                        "Developed automated reports required for manufacturing.",
                                        "Maintained and optimized factory information systems.",
                                        "Collaborated with cross-functional teams to improve production efficiency."
                                    ]
                                },
                                {
                                    "date": "2020/02 - 2022/06",
                                    "position": "<strong>Intern</strong>, <strong>Siliconware Precision Industries (SPIL)</strong>",
                                    "details": []
                                }
                            ]
                        },
                        "skills": {
                            "title": "Skills",
                            "content": [
                                "<strong>Programming:</strong> C, C#, Java, Python, JavaScript (Node.js, React), SQL",
                                "<strong>Cloud Computing:</strong> AWS",
                                "<strong>Web Development:</strong> Full-stack development",
                                "<strong>DevOps & Containerization:</strong> Docker"
                            ]
                        },
                        "qualifications": {
                            "title": "Qualifications",
                            "content": [
                                "- <strong>Master of Information Technology (Computer Science)</strong>, Queensland University of Technology (QUT), 2023-2025",
                                "- <strong>Bachelor’s in Computer Science</strong>, Feng Chia University, 2016-2020"
                            ]
                        }
                    }
                }
            },
            zh: {
                translation: {
                    welcome: "歡迎來到我的網站！",
                    home: "首頁",
                    about: "關於我",
                    portfolio: "作品集",
                    contact: "歡迎聯絡我。",
                    view_portfolio: "查看作品集",
                    intro: "嗨，我是 高尤家笙，來自台中，暫居澳洲",
                    study: "目前於昆士蘭科技大學（QUT）就讀資訊科技碩士，主修電腦科學。",
                    study_strong: "電腦科學, 昆士蘭科技大學",

                    work: "我曾在矽品精密擔任CIM工程師，主要負責製造自動化與數據處理",
                    work_strong: "CIM工程師, 矽品精密",

                    tech: "在這條技術之路上，我不斷探索機器學習、資料探勘、雲端計算以及網頁與行動應用開發，期待用技術解決真實世界的問題。",
                    tech_strong: "機器學習, 資料探勘, 雲端計算, 網頁與行動應用開發",

                    hobbies: "生活不只有程式碼，運動場上也能找到我的身影 —— 羽球場上的快節奏對決，登山時的徒步冒險，都是我放鬆與挑戰自我的方式。",
                    hobbies_strong: "羽球, 登山",
                    motto: "熱愛學習，樂於挑戰，期待與這個世界產生更多有意義的連結！",
                    searchLabel: "搜尋專案",
                    searchButton: "搜尋",
                    astronomy: "每日天文圖片",
                    "resume": {
                        "title": "履歷",
                        "overview": {
                            "title": "簡介",
                            "content": "我是<strong>高尤家笙</strong>, 目前就讀<strong>昆士蘭科技大學(QUT)</strong>的<strong>資訊科技碩士</strong>，主修<strong>計算機科學</strong>。擁有網頁與行動應用開發、雲端計算應用的經驗。曾在 <strong>矽品精密(SPIL)</strong> 擔任 <strong>CIM 工程師</strong>，開發製造所需的自動化報表。我熱衷於解決問題和創新，希望能將技術應用於現實世界的挑戰中。"
                        },
                        "career": {
                            "title": "職業經歷",
                            "items": [
                                {
                                    "date": "2020/07 - 2022/09",
                                    "position": "<strong>CIM 工程師</strong>，<strong>矽品精密 (SPIL)</strong>",
                                    "details": [
                                        "開發製造需求的自動化報表。",
                                        "維護與優化工廠資訊系統。",
                                        "與跨部門團隊合作，提高生產效率。"
                                    ]
                                },
                                {
                                    "date": "2020/02 - 2022/06",
                                    "position": "實習生，<strong>矽品精密 (SPIL)</strong>",
                                    "details": []
                                }
                            ]
                        },
                        "skills": {
                            "title": "技能",
                            "content": [
                                "<strong>程式語言：</strong> C, C#, Java, Python, JavaScript, SQL",
                                "<strong>雲端運算：</strong> AWS",
                                "<strong>網頁開發：</strong> 全端開發",
                                "<strong>DevOps & 容器化：</strong> Docker"
                            ]
                        },
                        "qualifications": {
                            "title": "學歷",
                            "content": [
                                "- <strong>資訊科技 (計算機科學)</strong>，昆士蘭科技大學 (QUT)，2023/07-2025/06",
                                "- <strong>資訊工程學系</strong>，逢甲大學，2016/09-2020/06"
                            ]
                        }
                    }
                }
            }
        },
        fallbackLng: "en", // 預設語言
        interpolation: { escapeValue: false }
    });

export default i18n;
