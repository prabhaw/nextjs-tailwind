import PrivateLayout from "./../../Layout/PrivateLayout.layout";
const Dashboard = (props) => {
  return (
    <>
      <PrivateLayout>
        <main className='bg-white-300 flex-1 p-3 overflow-hidden'>
          <div className='flex flex-col'>
            {/* Stats Row Starts Here */}
            <div className='flex flex-1 flex-col md:flex-row lg:flex-row mx-2'>
              <div className='shadow-lg bg-red-vibrant border-l-8 hover:bg-red-vibrant-dark border-red-vibrant-dark mb-2 p-2 md:w-1/4 mx-2'>
                <div className='p-4 flex flex-col'>
                  <a href='#' className='no-underline text-white text-2xl'>
                    $244
                  </a>
                  <a href='#' className='no-underline text-white text-lg'>
                    Total Sales
                  </a>
                </div>
              </div>
              <div className='shadow bg-info border-l-8 hover:bg-info-dark border-info-dark mb-2 p-2 md:w-1/4 mx-2'>
                <div className='p-4 flex flex-col'>
                  <a href='#' className='no-underline text-white text-2xl'>
                    $199.4
                  </a>
                  <a href='#' className='no-underline text-white text-lg'>
                    Total Cost
                  </a>
                </div>
              </div>
              <div className='shadow bg-warning border-l-8 hover:bg-warning-dark border-warning-dark mb-2 p-2 md:w-1/4 mx-2'>
                <div className='p-4 flex flex-col'>
                  <a href='#' className='no-underline text-white text-2xl'>
                    900
                  </a>
                  <a href='#' className='no-underline text-white text-lg'>
                    Total Users
                  </a>
                </div>
              </div>
              <div className='shadow bg-success border-l-8 hover:bg-success-dark border-success-dark mb-2 p-2 md:w-1/4 mx-2'>
                <div className='p-4 flex flex-col'>
                  <a href='#' className='no-underline text-white text-2xl'>
                    500
                  </a>
                  <a href='#' className='no-underline text-white text-lg'>
                    Total Products
                  </a>
                </div>
              </div>
            </div>
            {/* /Stats Row Ends Here */}
            {/* Card Sextion Starts Here */}
            <div className='flex flex-1 flex-col md:flex-row lg:flex-row mx-2'>
              {/* card */}
              <div className='rounded overflow-hidden shadow bg-white mx-2 w-full'>
                <div className='px-6 py-2 border-b border-light-grey'>
                  <div className='font-bold text-xl'>Trending Categories</div>
                </div>
                <div className='table-responsive'>
                  <table className='table text-grey-darkest'>
                    <thead className='bg-grey-dark text-white text-normal'>
                      <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Item</th>
                        <th scope='col'>Last</th>
                        <th scope='col'>Current</th>
                        <th scope='col'>Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope='row'>1</th>
                        <td>
                          <button className='bg-blue-500 hover:bg-blue-800 text-white font-light py-1 px-2 rounded-full'>
                            Twitter
                          </button>
                        </td>
                        <td>4500</td>
                        <td>4600</td>
                        <td>
                          <span className='text-green-500'>
                            <i className='fas fa-arrow-up' />
                            5%
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th scope='row'>2</th>
                        <td>
                          <button className='bg-primary hover:bg-primary-dark text-white font-light py-1 px-2 rounded-full'>
                            Facebook
                          </button>
                        </td>
                        <td>10000</td>
                        <td>3000</td>
                        <td>
                          <span className='text-red-500'>
                            <i className='fas fa-arrow-down' />
                            65%
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th scope='row'>3</th>
                        <td>
                          <button className='bg-success hover:bg-success-dark text-white font-light py-1 px-2 rounded-full'>
                            Amazon
                          </button>
                        </td>
                        <td>10000</td>
                        <td>3000</td>
                        <td>
                          <span className='text-red-500'>
                            <i className='fas fa-arrow-down' />
                            65%
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th scope='row'>4</th>
                        <td>
                          <button className='bg-blue-500 hover:bg-blue-800 text-white font-light py-1 px-2 rounded-full'>
                            Microsoft
                          </button>
                        </td>
                        <td>10000</td>
                        <td>3000</td>
                        <td>
                          <span className='text-green-500'>
                            <i className='fas fa-arrow-up' />
                            65%
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* /card */}
            </div>
            {/* /Cards Section Ends Here */}
            {/* Progress Bar */}
            <div className='flex flex-1 flex-col md:flex-row lg:flex-row mx-2 mt-2'>
              <div className='rounded overflow-hidden shadow bg-white mx-2 w-full pt-2'>
                <div className='px-6 py-2 border-b border-light-grey'>
                  <div className='font-bold text-xl'>
                    Progress Among Projects
                  </div>
                </div>
                <div className>
                  <div className='w-full'>
                    <div className='shadow w-full bg-grey-light'>
                      <div
                        className='bg-blue-500 text-xs leading-none py-1 text-center text-white'
                        style={{ width: "45%" }}
                      >
                        45%
                      </div>
                    </div>
                    <div className='shadow w-full bg-grey-light mt-2'>
                      <div
                        className='bg-teal-500 text-xs leading-none py-1 text-center text-white'
                        style={{ width: "55%" }}
                      >
                        55%
                      </div>
                    </div>
                    <div className='shadow w-full bg-grey-light mt-2'>
                      <div
                        className='bg-orange-500 text-xs leading-none py-1 text-center text-white'
                        style={{ width: "65%" }}
                      >
                        65%
                      </div>
                    </div>
                    <div className='shadow w-full bg-grey-300 mt-2'>
                      <div
                        className='bg-red-800 text-xs leading-none py-1 text-center text-white'
                        style={{ width: "75%" }}
                      >
                        75%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Profile Tabs*/}
            <div className='flex flex-1 flex-col md:flex-row lg:flex-row mx-2 p-1 mt-2 mx-auto lg:mx-2 md:mx-2 justify-between'>
              {/*Top user 1*/}
              <div className='rounded rounded-t-lg overflow-hidden shadow max-w-xs my-3'>
                <img src='https://i.imgur.com/w1Bdydo.jpg' className='w-full' />
                <div className='flex justify-center -mt-8'>
                  <img
                    src='https://i.imgur.com/8Km9tLL.jpg'
                    className='rounded-full border-solid border-white border-2 -mt-3'
                  />
                </div>
                <div className='text-center px-3 pb-6 pt-2'>
                  <h3 className='text-black text-sm bold font-sans'>
                    Olivia Dunham
                  </h3>
                  <p className='mt-2 font-sans font-light text-grey-700'>
                    Hello, i'm from another the other side!
                  </p>
                </div>
                <div className='flex justify-center pb-3 text-grey-dark'>
                  <div className='text-center mr-3 border-r pr-3'>
                    <h2>34</h2>
                    <span>Photos</span>
                  </div>
                  <div className='text-center'>
                    <h2>42</h2>
                    <span>Friends</span>
                  </div>
                </div>
              </div>
              {/*Top user 2*/}
              <div className='rounded rounded-t-lg overflow-hidden shadow max-w-xs my-3'>
                <img src='https://i.imgur.com/w1Bdydo.jpg' className='w-full' />
                <div className='flex justify-center -mt-8'>
                  <img
                    src='https://i.imgur.com/8Km9tLL.jpg'
                    className='rounded-full border-solid border-white border-2 -mt-3'
                  />
                </div>
                <div className='text-center px-3 pb-6 pt-2'>
                  <h3 className='text-black text-sm bold font-sans'>
                    Olivia Dunham
                  </h3>
                  <p className='mt-2 font-sans font-light text-grey-dark'>
                    Hello, i'm from another the other side!
                  </p>
                </div>
                <div className='flex justify-center pb-3 text-grey-dark'>
                  <div className='text-center mr-3 border-r pr-3'>
                    <h2>34</h2>
                    <span>Photos</span>
                  </div>
                  <div className='text-center'>
                    <h2>42</h2>
                    <span>Friends</span>
                  </div>
                </div>
              </div>
              {/*Top user 3*/}
              <div className='rounded rounded-t-lg overflow-hidden shadow max-w-xs my-3'>
                <img src='https://i.imgur.com/w1Bdydo.jpg' className='w-full' />
                <div className='flex justify-center -mt-8'>
                  <img
                    src='https://i.imgur.com/8Km9tLL.jpg'
                    className='rounded-full border-solid border-white border-2 -mt-3'
                  />
                </div>
                <div className='text-center px-3 pb-6 pt-2'>
                  <h3 className='text-black text-sm bold font-sans'>
                    Olivia Dunham
                  </h3>
                  <p className='mt-2 font-sans font-light text-grey-dark'>
                    Hello, i'm from another the other side!
                  </p>
                </div>
                <div className='flex justify-center pb-3 text-grey-dark'>
                  <div className='text-center mr-3 border-r pr-3'>
                    <h2>34</h2>
                    <span>Photos</span>
                  </div>
                  <div className='text-center'>
                    <h2>42</h2>
                    <span>Friends</span>
                  </div>
                </div>
              </div>
            </div>
            {/*/Profile Tabs*/}
          </div>
        </main>
        {/*/Main*/}

        {/*Footer*/}
        <footer className='bg-grey-darkest text-white p-2'>
          <div className='flex flex-1 mx-auto'>© My Design</div>
        </footer>
      </PrivateLayout>
    </>
  );
};

export default Dashboard;
