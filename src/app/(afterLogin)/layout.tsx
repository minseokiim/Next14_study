import style from "@/app/(afterLogin)/layout.module.css";
import Link from "next/link";
import zLogo from "/public/zlogo.png";
import Image from "next/image";
import NavMenu from "./_component/NavMenu";
import LogoutButton from "./_component/LogoutButton";

export default function AfterLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={style.container}>
      <header className={style.leftSectionWrapper}>
        <section className={style.leftSection}>
          <div className={style.leftSectionFixed}>
            <Link className={style.logo} href="/home">
              <div className={style.logoPill}>
                <Image src={zLogo} alt="로고" width={40} height={40}></Image>
              </div>
            </Link>
            <nav>
              <ul>
                <NavMenu />
              </ul>
              <Link href="/compose/tweet" className={style.postButton}>
                게시하기
              </Link>
            </nav>
            <LogoutButton />
            {/* fixed안에서 결정, navMenu를 최대한 키우면 로그아웃은 제일 밑으로 밀려남 */}
          </div>
        </section>
      </header>
      <div className={style.rightSectionWrapper}>
        <div className={style.rightSectionInner}>
          <main className={style.main}></main>
          <section className={style.rightSection}>
            <div style={{ marginBottom: 60, width: "inherit" }}>
              <form className={style.search}>
                <svg width={20} viewBox="0 0 24 24" aria-hidden="true">
                  <g>
                    <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
                  </g>
                </svg>
                <input type="search" />
              </form>
            </div>
            <div className={style.followRecommend}>
              <h3>팔로우 추천</h3>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
