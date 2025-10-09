import { useEffect, useState } from "react";
import RoleWord from "./widgets/RoleWord";
import About from "./sections/About";
import {JavaSvg } from "./components/icons/JavaSvg";
import { SpringSvg } from "./components/icons/SpringSvg";
import { SpringBootSvg } from "./components/icons/SpringBootSvg";
import { IntellijSvg } from "./components/icons/IntellijSvg";
import { EclipseSvg } from "./components/icons/EclipseSvg";
import { PythonSvg } from "./components/icons/PythonSvg";
import { JavaScriptSvg } from "./components/icons/JavaScriptSvg";
import { OracleSvg } from "./components/icons/OracleSvg";
import { MySqlSvg } from "./components/icons/MySqlSvg";
import { PostgreSqlSvg } from "./components/icons/PostgreSqlSvg";
import { HtmlSvg } from "./components/icons/HtmlSvg";
import { RestFulApiSvg } from "./components/icons/RestFulApi";
import { GithubSvg } from "./components/icons/GithubSvg";
import { NotionSvg } from "./components/icons/NotionSvg";
import { SlackSvg } from "./components/icons/SlackSvg";
import { JpaSvg } from "./components/icons/JpaSvg";
import { DockerSvg } from "./components/icons/DockerSvg";
import { AwsSvg } from "./components/icons/AwsSvg";



/* ===== Theme hook (dark / light) ===== */
function useTheme() {
  const getInitial = () => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const [theme, setTheme] = useState<"light" | "dark">(getInitial);

  // html 요소에 .dark 토글 + color-scheme 동기화 + localStorage 반영
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  return { theme, toggle };
}

/* ===== Data ===== */
const SKILLS = [
  { label: "Java", Icon: JavaSvg },
  { label: "Spring", Icon: SpringSvg },
  { label: "Spring Boot", Icon: SpringBootSvg },
  { label: "JPA", Icon: JpaSvg },
  { label: "IntelliJ", Icon: IntellijSvg },
  { label: "Eclipse", Icon: EclipseSvg },
  { label: "Python", Icon: PythonSvg },
  { label: "JavaScript", Icon: JavaScriptSvg },
  { label: "Oracle", Icon: OracleSvg},
  { label: "MySql", Icon: MySqlSvg},
  { label: "PostgreSql", Icon: PostgreSqlSvg},
  { label: "HTML/CSS" , Icon: HtmlSvg},
  { label: "RESTful API", Icon: RestFulApiSvg},
  { label: "AWS", Icon: AwsSvg},
  { label: "Docker", Icon: DockerSvg},
  { label: "Github", Icon: GithubSvg},
  { label: "Notion", Icon: NotionSvg},
  { label: "Slack", Icon: SlackSvg},
];

const EDUCATION = [
  {
    title: "남궁성의 AI 백엔드 부트캠프",
    school: "패스트캠퍼스",
    when: "2024.12 ~ 2025.06",
    details: "IT 서비스 트렌드를 분석하여 프로젝트 주제를 선정하고, 요구사항 정의와 데이터베이스·아키텍처 설계를 거쳐 실제 멀티 플랫폼 환경에서 서비스 구현을 진행했습니다.",
  },
  {
    title: "멀티플랫폼 융합 응용 SW 개발자 양성과정",
    school: "KG아이티뱅크",
    when: "2022.08 – 2023.02",
    details: "데이터베이스 실습, 코드리뷰 및 TDD, Docker와 AWS 환경 세팅, MyBatis 실무 특강, Spring/Spring Boot 기반 백엔드 개발, JPA 및 MyBatis 연동, REST API 설계, 단위/통합 테스트, 협업을 위한 Git/GitHub 활용 하였습니다. 또한 팀 단위 Mini Project와 기업 연계 Final Project를 통해 실무 수준의 백엔드 서비스(회원 관리, 게시판, AI 기반 기능 등)를 기획·설계·구현·배포하는 경험을 쌓았습니다. ",
  },
];

const PROJECTS = [
  {
    title: "Zoop (부동산중개인을 위한 AI 부동산 플랫폼)",
    desc:
      "AI 기반 매물 조건 재사용 필터와 키워드 알림, 채팅 검색을 제공해 매물 탐색 시간을 줄여주는 중개 플랫폼입니다.",
    tech: ["Java", "PostgreSQL", "Spring Boot", "Spring Security", "JPA", "JWT", "Python", "AWS"],
    repo: "https://github.com/seoha25/zoop.git",
  },
  {
    title: "TrustRide AI (AI 기반 중고차 플랫폼)",
    desc:
      "LLM 기반 중고차 추천과 주문·배송·환불까지 처리하는 플랫폼.",
    tech: ["Java", "MyBatis", "JSP", "LLM", "Python", "Spring", "MySQL","Ajax"],
    repo: "https://github.com/seoha25/TrustRide_AI.git",
  },
  {
    title: "Ourblog (블로그 플랫폼)",
    desc:
      "게시글/댓글/좋아요, 카테고리·검색, 관리자 기능을 갖춘 개발자용 블로그 플랫폼.",
    tech: ["Java", "MyBatis", "Python", "Spring", "MySQL", "JWT", "Spring Security"],
    repo: "https://github.com/seoha25/ourblog.git",
  },
];

/* ===== Component ===== */
export default function Portfolio() {
  const { theme, toggle } = useTheme();

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-gray-950 text-slate-800 dark:text-slate-100">
      {/* NAV */}
      <nav className="sticky top-0 z-50 h-16 backdrop-blur border-b border-slate-200/60 dark:border-slate-800/60 bg-slate-100/80 dark:bg-gray-900/80">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-3">
          <a
            href="#home"
            className="font-black tracking-wide text-[clamp(1rem,0.6vw+1rem,1.25rem)] text-indigo-400 dark:text-indigo-300 shrink-0"
          >
            Seoha.dev
          </a>

          <div className="hidden md:flex flex-1 justify-center min-w-0">
            <div className="flex items-center gap-6 lg:gap-8 text-[clamp(0.9rem,0.4vw+0.8rem,1rem)] text-slate-700 dark:text-slate-300">
              {["Home", "About", "Skills", "Education", "Projects"].map((id) => (
                <a
                  key={id}
                  href={`#${id.toLowerCase()}`}
                  className="hover:text-red-500 transition-colors whitespace-nowrap"
                >
                  {id}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <button
              aria-label="Toggle theme"
              aria-pressed={theme === "dark"}
              onClick={toggle}
               className="w-10 h-10 grid place-items-center border-0 rounded-none hover:bg-slate-200/60 dark:hover:bg-slate-800/60"
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              download="이서하_이력서.pdf"
              className="px-3 py-2 rounded-md bg-indigo-500 text-white font-semibold shadow hover:bg-indigo-400 dark:bg-indigo-500 dark:hover:bg-indigo-400 shrink-0"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="scroll-mt-24">
        <div className="min-h-[calc(100svh-4rem)] flex flex-col items-center justify-center max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-black tracking-tight text-[clamp(2rem,4vw+1rem,4rem)]">
            안녕하세요, <span className="text-indigo-400 dark:text-indigo-300">이서하</span>입니다
          </h1>
          <p className="mt-4 font-semibold text-[clamp(1rem,1.2vw+0.6rem,1.6rem)] text-slate-700 dark:text-slate-200">
      저는{" "}
      <RoleWord
        roles={["백엔드", "웹", "소프트웨어"]}
        typingSpeed={100}   
        hold={2200}
        className="text-sky-500"
      />{" "}
      개발자입니다.
    </p>
        </div>
      </section>
      <About />
      {/* SKILLS */}
      <section
        id="skills"
        className="scroll-mt-24 relative py-12 md:py-20 lg:py-28 bg-slate-100 dark:bg-[#0b0f17] text-slate-800 dark:text-slate-100 overflow-hidden"
      >
        {/* 배경 라인 패턴 */}
        <svg
          className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[100vw] max-w-none opacity-[0.18] -z-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid slice"
        >
          <g stroke="#8ab4f8" strokeWidth="1" fill="none">
            <path d="M50 80 L200 160 L380 100 L520 200 L720 120" />
            <path d="M120 300 L260 240 L340 340 L500 300 L680 360" />
            <path d="M40 480 L220 420 L420 520 L600 460 L760 520" />
            <circle cx="200" cy="160" r="3" />
            <circle cx="520" cy="200" r="3" />
            <circle cx="340" cy="340" r="3" />
            <circle cx="500" cy="300" r="3" />
          </g>
        </svg>

        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[clamp(1.6rem,1.8vw+1rem,2.5rem)] font-extrabold text-indigo-300 md:text-indigo-400 dark:text-indigo-300">
            Skills
          </h2>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-x-8 gap-y-12">
          {SKILLS.map(s => (
          <div key={s.label} className="flex flex-col items-center gap-2">
            <s.Icon className="w-8 h-8" />
            <span>{s.label}</span>
          </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="scroll-mt-24 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-28" id="education">
        <h2 className="text-[clamp(1.6rem,1.8vw+1rem,2.5rem)] font-extrabold text-indigo-300 md:text-indigo-400 dark:text-indigo-300">
          Education
        </h2>
        <div className="mt-8 space-y-6">
          {EDUCATION.map((e) => (
            <article
              key={e.title}
              className="rounded-2xl bg-slate-900/70 text-slate-100 border border-slate-700/60 p-6 shadow-md"
            >
              <h3 className="text-[clamp(1.1rem,0.8vw+1rem,1.6rem)] font-bold text-sky-300">
                {e.title}
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                {e.school} · {e.when}
              </p>
              <p className="mt-3 text-slate-200">{e.details}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="scroll-mt-24 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pb-24" id="projects">
        <h2 className="text-[clamp(1.6rem,1.8vw+1rem,2.5rem)] font-extrabold text-indigo-300 md:text-indigo-400 dark:text-indigo-300">
          Projects
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PROJECTS.map((p) => (
            <a
              key={p.title}
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl bg-slate-900/70 text-slate-100 border border-slate-700/60 p-6 hover:border-sky-400/50 hover:shadow-lg transition"
            >
              <h3 className="text-[clamp(1.2rem,0.9vw+1rem,1.6rem)] font-bold text-sky-300 group-hover:text-sky-200">
                {p.title}
              </h3>
              <p className="mt-3 text-slate-300 leading-7">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full bg-slate-800 border border-slate-600 text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-sm text-sky-400">Open in GitHub →</div>
            </a>
          ))}
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Seoha · React + Tailwind
      </footer>
    </div>
  );
}
