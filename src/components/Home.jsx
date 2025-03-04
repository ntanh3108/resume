import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex-[3] transition-all duration-500 dark:bg-black dark:text-white">
      <main className="flex max-w-[1000px] flex-col gap-10 p-5 md:mx-10 md:py-14">
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold md:text-4xl">About</h1>
            <a
              href="/path-to-resume.pdf"
              download
              className="px-4 py-2 rounded border border-black text-black 
              bg-white transition-colors hover:bg-black hover:text-white 
              dark:border-white dark:text-white dark:bg-black 
              dark:hover:bg-white dark:hover:text-black"
            >
              Download My Resume
            </a>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            itaque quia tempore molestiae quisquam. Saepe ipsa repellat nam
            veritatis consectetur laudantium impedit sint commodi, quidem natus
            quisquam! Doloribus, minima excepturi.
          </p>
        </div>

        <div className="space-y-10">
          <h1 className="text-2xl font-bold md:text-4xl">Experience</h1>

          <div className="flex flex-col lg:flex-row lg:gap-20">
            <ul className="flex-1 w-full break-words">
              <li
                className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px]
      before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full 
      before:bg-black dark:before:bg-white before:transform"
              >
                <span className="font-semibold md:text-lg">
                  <a href="https://saentech.vn/" target="_blank">SAEN TECH TRADING CO.,LTD</a>
                </span>
                <span className="font-light">Position: Sales Intern</span>
                <span className="text-sm text-gray-400">05/2024 - 09/2024</span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                  My responsibilities:{" "}
                </p>
                <ul className="list-disc ml-3 text-sm text-gray-600 dark:text-gray-400">
                  <li>Task 1</li>
                  <li>Task 2</li>
                  <li>Task 3</li>
                </ul>
              </li>
            </ul>

            <ul className="flex-1 w-full break-words">
              <li
                className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px]
      before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full 
      before:bg-black dark:before:bg-white before:transform"
              >
                <span className="font-semibold md:text-lg">
                  <a href="http://www.soule.com.tw/" target="_blank">Representative Office of SOU LE ENTERPRISE CO., LTD in Ho Chi
                  Minh City</a>
                </span>
                <span className="font-light">
                  Position: Sales Staff
                </span>
                <span className="text-sm text-gray-400">
                  10/2024 - On Going
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                  My responsibilities:{" "}
                </p>
                <ul className="list-disc ml-3 text-sm text-gray-600 dark:text-gray-400">
                  <li>Task 1</li>
                  <li>Task 2</li>
                  <li>Task 3</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-5xl space-y-8">
          <h1 className="text-2xl font-bold md:text-4xl">Researches</h1>

          <div className="space-y-10">
            <div className="text-baseline space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                <a
                  href="https://doi.org/10.1016/j.mseb.2024.117793"
                  target="_balnk"
                  rel="noopener noreferrer"
                >
                  A high-capacity double-layered (NH<sub>4</sub>)<sub>0.5</sub>V
                  <sub>2</sub>O<sub>5</sub> in micro-rods structure for sodium
                  storage
                </a>
              </h3>

              <p className="text-xs text-gray-600 dark:text-gray-400">
                First Author | Published on January 2025 |{" "}
                <a
                  href="https://www.sciencedirect.com/journal/materials-science-and-engineering-b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Materials Science and Engineering: B - Volume 311, 117793
                </a>
              </p>

              <p className="text-sm text-gray-600 dark:text-gray-400 md:test-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                quis ab quae quo nisi cupiditate dolor enim adipisci illum nemo
                suscipit sequi porro, totam, vero quas voluptatibus ea,
                explicabo expedita!
              </p>
            </div>

            <div className="text-baseline space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                <a
                  href="https://doi.org/10.1016/j.mseb.2024.117793"
                  target="_balnk"
                  rel="noopener noreferrer"
                >
                  A high-capacity double-layered (NH<sub>4</sub>)<sub>0.5</sub>V
                  <sub>2</sub>O<sub>5</sub> in micro-rods structure for sodium
                  storage
                </a>
              </h3>

              <p className="text-xs text-gray-600 dark:text-gray-400">
                First Author | Published on January 2025 |{" "}
                <a
                  href="https://www.sciencedirect.com/journal/materials-science-and-engineering-b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Materials Science and Engineering: B - Volume 311, 117793
                </a>
              </p>

              <p className="text-sm text-gray-600 dark:text-gray-400 md:test-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                quis ab quae quo nisi cupiditate dolor enim adipisci illum nemo
                suscipit sequi porro, totam, vero quas voluptatibus ea,
                explicabo expedita!
              </p>
            </div>

            <div className="text-baseline space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                <a
                  href="https://doi.org/10.1016/j.mseb.2024.117793"
                  target="_balnk"
                  rel="noopener noreferrer"
                >
                  A high-capacity double-layered (NH<sub>4</sub>)<sub>0.5</sub>V
                  <sub>2</sub>O<sub>5</sub> in micro-rods structure for sodium
                  storage
                </a>
              </h3>

              <p className="text-xs text-gray-600 dark:text-gray-400">
                First Author | Published on January 2025 |{" "}
                <a
                  href="https://www.sciencedirect.com/journal/materials-science-and-engineering-b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Materials Science and Engineering: B - Volume 311, 117793
                </a>
              </p>

              <p className="text-sm text-gray-600 dark:text-gray-400 md:test-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                quis ab quae quo nisi cupiditate dolor enim adipisci illum nemo
                suscipit sequi porro, totam, vero quas voluptatibus ea,
                explicabo expedita!
              </p>
            </div>

            <div className="text-baseline space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                <a
                  href="https://doi.org/10.1016/j.mseb.2024.117793"
                  target="_balnk"
                  rel="noopener noreferrer"
                >
                  A high-capacity double-layered (NH<sub>4</sub>)<sub>0.5</sub>V
                  <sub>2</sub>O<sub>5</sub> in micro-rods structure for sodium
                  storage
                </a>
              </h3>

              <p className="text-xs text-gray-600 dark:text-gray-400">
                First Author | Published on January 2025 |{" "}
                <a
                  href="https://www.sciencedirect.com/journal/materials-science-and-engineering-b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Materials Science and Engineering: B - Volume 311, 117793
                </a>
              </p>

              <p className="text-sm text-gray-600 dark:text-gray-400 md:test-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                quis ab quae quo nisi cupiditate dolor enim adipisci illum nemo
                suscipit sequi porro, totam, vero quas voluptatibus ea,
                explicabo expedita!
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <h1 className="text-2xl font-bold md:text-4xl">
            References
          </h1>

          <div className="flex flex-wrap gap-10">
            <div className="text-baseline space-y-1">
              <h3 className="text-lg  font-semibold md:text-xl ">
              ASSOC.PROF. Le Thanh Nguyen Huynh
              </h3>
              <h2 className="test-base font-light">Department of Physical Chemistry, Faculty of Chemistry, VNU-HCMUS</h2>
              <p className="text-gray-600 dark:text-gray-400">Email: </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
