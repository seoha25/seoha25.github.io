export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 relative py-14 sm:py-20 lg:py-24 bg-slate-100 dark:bg-gray-950 text-slate-800 dark:text-slate-100 overflow-hidden"
    >
      {/* 배경 글로우 */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-32 h-64 w-64 rounded-full bg-indigo-400/10 blur-3xl" />
        <div className="absolute -right-16 bottom-24 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="relative max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 제목 — 다른 섹션과 컬러 일치 */}
        <div className="text-center">
          <h2 className="text-[clamp(1.6rem,1.8vw+1rem,2.5rem)] font-extrabold text-indigo-300 md:text-indigo-400 dark:text-indigo-300">
            About Me
          </h2>
          <div className="mx-auto mt-3 h-[3px] w-16 rounded-full bg-indigo-400 dark:bg-indigo-300/80" />
        </div>

        {/* 본문: md부터 가로 배치 */}
        <div className="mt-10 flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
          {/* 아바타 */}
          <div className="relative mx-auto md:mx-0 w-[200px] md:w-[260px] lg:w-[300px] shrink-0">
            <div className="absolute -inset-5 rounded-full bg-indigo-400/10 blur-2xl" aria-hidden />
            <div className="relative aspect-square w-full rounded-full border-4 border-indigo-500/80 shadow-xl overflow-hidden bg-slate-200/40 dark:bg-slate-800/40">
              <img
                src="/src/assets/profile.jpg"
                alt="프로필 사진"
                className="h-full w-full object-cover"
                style={{ objectPosition: "center 20%" }}
                loading="lazy"
              />
            </div>
          </div>

          {/* 텍스트 — 여백·줄간격 축소 */}
          <article className="flex-1 space-y-4 leading-7 text-[clamp(0.98rem,0.55vw+0.82rem,1.08rem)]">
            <h3 className="font-semibold text-[clamp(1.05rem,0.7vw+0.95rem,1.4rem)] text-emerald-500">
              발전하는 개발자
            </h3>

            <p className="text-slate-700 dark:text-slate-300">
              출결·재고·매출 데이터를 다루며 현업 요구와 <strong>데이터 모델링의 중요성</strong>을 체득했습니다.
              잘 정리된 데이터가 운영을 최적화하는 과정을 보며 시스템의 ‘사용자’를 넘어
              <strong> 현업 문제를 기술로 해결해 효율을 높이는 개발자</strong>가 되기 위해 전향했습니다.
              저는 <strong>Java/Spring</strong>으로 서비스를 설계·구현하고 <strong>MyBatis/JPA</strong>로 데이터를 연동해 왔으며,
              이러한 경험을 바탕으로 두 가지 역량을 키웠습니다.
            </p>

            <p className="text-slate-700 dark:text-slate-300">
              <strong>첫째, 주도성입니다.</strong> 기업 연계 프로젝트에서 크롤링의 필요성에 이견이 있었을 때
              <strong> 데이터 관점으로 타당성을 설명</strong>하고 <strong>역할을 재배치</strong>해 필요한 데이터를 확보했으며
              그 결과 <strong>기한 내 프로젝트를 완수</strong>했습니다.
            </p>

            <p className="text-slate-700 dark:text-slate-300">
              <strong>둘째, 협업 능력입니다.</strong> 팀 맞춤 <strong>브랜치 전략과 사용 가이드</strong>를 문서화·공유해
              <strong> 온보딩을 단축</strong>하고, 공통 규칙에 따른 작업·리뷰·병합으로
              <strong> 충돌과 재작업을 줄였습니다.</strong>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
