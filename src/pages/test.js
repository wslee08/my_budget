import Image from 'next/image'
import '../app/globals.css'
export default function Test() {
  return (
      <section className="bg-green-50 w-screen h-screen">
          <div className="container px-4 mx-auto">
              <div className="max-w-lg mx-auto py-8">
                  <div className="text-center mb-8">
                      {/*<h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-green-900 flex justify-center">*/}
                      {/*    <img className={'w-10'} src={'/money_icon.png'}/>마이 머니*/}
                      {/*</h2>*/}
                  </div>
                  <form action="">
                      <div className="mb-6">
                          <label className="block mb-2 font-extrabold text-green-900" htmlFor="">이메일</label>
                          <input
                              className="inline-block w-full p-4 leading-6 text-lg font-extrabold text-black placeholder-zinc-300 bg-white shadow border-2 border-green-900 rounded"
                              type="email" placeholder="이메일을 입력해주세요."/>
                      </div>
                      <div className="mb-6">
                          <label className="block mb-2 font-extrabold text-green-900" htmlFor="">비밀번호</label>
                          <input
                              className="inline-block w-full p-4 leading-6 text-lg font-extrabold text-black placeholder-zinc-300 bg-white shadow border-2 border-green-900 rounded"
                              type="password" placeholder="비밀번호를 입력해주세요."/>
                      </div>
                      <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
                          <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
                              <label htmlFor="">
                                  <input type="checkbox"/>
                                      <span className="ml-1 font-extrabold text-green-900">로그인 정보 저장</span>
                              </label>
                          </div>
                          <div className="w-full lg:w-auto px-4"><a
                              className="inline-block font-extrabold hover:underline text-red-500" href="#">비밀번호를 분실하셨나요?</a>
                          </div>
                      </div>
                      <button
                          className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-green-800 hover:bg-green-900 border-3 border-green-900 shadow rounded transition duration-200">로그인
                      </button>
                      <p className="text-center text-black font-extrabold">계정이 없으신가요? <a
                          className="text-red-500 hover:underline" href="#">회원가입</a></p>
                  </form>
              </div>
          </div>
      </section>
  )
}
