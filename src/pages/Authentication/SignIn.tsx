import React from 'react';
import { useContext, useState } from "react";
import authCtx from "@/stores/auth/AuthContextProvider";
import { LoginForm, LoginFormErrors, RoleEnum } from "@/types/AuthModel";
import { useLoginForm } from "@/hooks/api/auth.api";
import { Link } from 'react-router-dom';

import PageTitle from '@/components/PageTitle';
import login from '../../images/login.png';

const SignIn = () => {
  const loginMutation = useLoginForm();
  const { globalLogInDispatch } = useContext(authCtx);
  const [loginForm, setLoginForm] = useState<LoginForm>({
    username: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState<LoginFormErrors>({
    errors: null,
  });
  const handleChange = <T extends string | null>(name: string, value: T) => {
    setLoginForm((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormErrors({
      errors: null,
    });
    try {
      const res = await loginMutation.mutateAsync(loginForm);
      globalLogInDispatch({
        id: res?.data?.id,
        name: res?.data?.name,
        email: res?.data?.email,
        role: res?.data?.role,
        accessToken: res?.data?.accessToken,
      });
    } catch (error: any) {
      if (error.response && error.response.data) {
        const errorsObject = error.response.data;
        setFormErrors(errorsObject);
      } else {
        console.error("Error occurred without response data:", error);
      }
    }
  };

  return (
    <>
      <PageTitle title="Connexion | TailAdmin - Tailwind CSS Admin Dashboard Template" />

      {/* Arrière-plan clair pour la page */}
      <div className="min-h-screen flex items-center justify-center #bfdbfe">
        {/* Boîte centrale */}
        <div className="bg-white shadow-2xl rounded-lg flex flex-col md:flex-row w-11/12 md:w-3/4 max-w-4xl overflow-hidden p-6 md:p-8 m-4 md:m-6">
          
          {/* Section gauche - Formulaire de connexion */}
          <div className="w-full md:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-center text-[#0284c7] mb-2 ">
              Plateforme DIGMACO
            </h1>
            <div className="flex items-center justify-center mb-6">
              <div className="w-1/5 border-t border-gray-300"></div>
              <h2 className="mx-4 text-gray-500 text-sm">
                Entrer vos coordonnées
              </h2>
              <div className="w-1/5 border-t border-gray-300"></div>
            </div>

            <form onSubmit={handleSubmit}>
              {formErrors?.errors && (
                <div className="flex w-full border-l-6 border-red-500 bg-red-100 px-7 py-4 shadow-md mb-4">
                  <div className="mr-5 flex h-9 w-full max-w-[36px] items-center justify-center rounded-lg bg-red-500 text-white">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.4917 7.65579L11.106 12.2645C11.2545 12.4128 11.4715 12.5 11.6738 12.5C11.8762 12.5 12.0931 12.4128 12.2416 12.2645C12.5621 11.9445 12.5623 11.4317 12.2423 11.1114C12.2422 11.1113 12.2422 11.1113 12.2422 11.1113C12.242 11.1111 12.2418 11.1109 12.2416 11.1107L7.64539 6.50351L12.2589 1.91221L12.2595 1.91158C12.5802 1.59132 12.5802 1.07805 12.2595 0.757793C11.9393 0.437994 11.4268 0.437869 11.1064 0.757418C11.1063 0.757543 11.1062 0.757668 11.106 0.757793L6.49234 5.34931L1.89459 0.740581L1.89396 0.739942C1.57364 0.420019 1.0608 0.420019 0.740487 0.739944C0.42005 1.05999 0.419837 1.57279 0.73985 1.89309L6.4917 7.65579ZM6.4917 7.65579L1.89459 12.2639L1.89395 12.2645C1.74546 12.4128 1.52854 12.5 1.32616 12.5C1.12377 12.5 0.906853 12.4128 0.758361 12.2645L1.1117 11.9108L0.758358 12.2645C0.437984 11.9445 0.437708 11.4319 0.757539 11.1116C0.757812 11.1113 0.758086 11.111 0.75836 11.1107L5.33864 6.50287L0.740487 1.89373L6.4917 7.65579Z"
                        fill="#ffffff"
                        stroke="#ffffff"
                      ></path>
                    </svg>
                  </div>
                  <div className="w-full">
                    <h5 className="mb-2 font-semibold text-red-700">
                      Il y a des erreurs dans votre soumission
                    </h5>
                    <ul>
                      {/* Liste des erreurs */}
                    </ul>
                  </div>
                </div>
              )}
              <div className="mb-6">
                <label className="mb-2 block font-medium text-gray-700">
                  Nom d'utilisateur
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Entrer votre nom d'utilisateur"
                    className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-6 pr-10 text-gray-700 outline-none focus:border-blue-500 focus-visible:shadow-none"
                    required
                    value={loginForm.username || ""}
                    onChange={(event) =>
                      handleChange("username", event.currentTarget.value)
                    }
                  />
                  <span className="absolute right-4 top-2.5">
                    <svg
                      className="fill-current"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.5">
                        <path
                          d="M11.0008 9.52185C13.5445 9.52185 15.607 7.5281 15.607 5.0531C15.607 2.5781 13.5445 0.584351 11.0008 0.584351C8.45703 0.584351 6.39453 2.5781 6.39453 5.0531C6.39453 7.5281 8.45703 9.52185 11.0008 9.52185ZM11.0008 2.1656C12.6852 2.1656 14.0602 3.47185 14.0602 5.08748C14.0602 6.7031 12.6852 8.00935 11.0008 8.00935C9.31641 8.00935 7.94141 6.7031 7.94141 5.08748C7.94141 3.47185 9.31641 2.1656 11.0008 2.1656Z"
                          fill=""
                        />
                        <path
                          d="M13.2352 11.0687H8.76641C5.08828 11.0687 2.09766 14.0937 2.09766 17.7719V20.625C2.09766 21.0375 2.44141 21.4156 2.88828 21.4156C3.33516 21.4156 3.67891 21.0719 3.67891 20.625V17.7719C3.67891 14.9531 5.98203 12.6156 8.83516 12.6156H13.2695C16.0883 12.6156 18.4258 14.9187 18.4258 17.7719V20.625C18.4258 21.0375 18.7695 21.4156 19.2164 21.4156C19.6633 21.4156 20.007 21.0719 20.007 20.625V17.7719C19.9039 14.0937 16.9133 11.0687 13.2352 11.0687Z"
                          fill=""
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <label className="mb-2 block font-medium text-gray-700">
                  Mot de passe
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Entrer votre mot de passe"
                    className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-6 pr-10 text-gray-700 outline-none focus:border-blue-500 focus-visible:shadow-none"
                    required
                    value={loginForm.password || ""}
                    onChange={(event) =>
                      handleChange("password", event.currentTarget.value)
                    }
                  />
                  <span className="absolute right-4 top-2.5">
                    <svg
                      className="fill-current"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.5">
                        <path
                          d="M16.1547 6.80626V5.91251C16.1547 3.16251 14.0922 0.825009 11.4797 0.618759C10.0359 0.481259 8.59219 0.996884 7.52656 1.95938C6.46094 2.92188 5.84219 4.29688 5.84219 5.70626V6.80626C3.84844 7.18438 2.33594 8.93751 2.33594 11.0688V17.2906C2.33594 19.5594 4.19219 21.3813 6.42656 21.3813H15.5016C17.7703 21.3813 19.6266 19.525 19.6266 17.2563V11C19.6609 8.93751 18.1484 7.21876 16.1547 6.80626ZM8.55781 3.09376C9.31406 2.40626 10.3109 2.06251 11.3422 2.16563C13.1641 2.33751 14.6078 3.98751 14.6078 5.91251V6.70313H7.38906V5.67188C7.38906 4.70938 7.80156 3.78126 8.55781 3.09376ZM18.1141 17.2906C18.1141 18.7 16.9453 19.8688 15.5359 19.8688H6.46094C5.05156 19.8688 3.91719 18.7344 3.91719 17.325V11.0688C3.91719 9.52189 5.15469 8.28438 6.70156 8.28438H15.2953C16.8422 8.28438 18.1141 9.52188 18.1141 11V17.2906Z"
                          fill=""
                        />
                        <path
                          d="M10.9977 11.8594C10.5852 11.8594 10.207 12.2031 10.207 12.65V16.2594C10.207 16.6719 10.5508 17.05 10.9977 17.05C11.4102 17.05 11.7883 16.7063 11.7883 16.2594V12.6156C11.7883 12.2031 11.4102 11.8594 10.9977 11.8594Z"
                          fill=""
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              </div>

              <div className="mb-5">
                <input
                  type="submit"
                  value="Se connecter"
                  className="w-full cursor-pointer rounded-lg py-2 text-white transition hover:bg-opacity-90"
                  style={{ backgroundColor: '#0284c7', borderColor: '#0284c7' }}
                />
              </div>
            </form>
          </div>

          {/* Section droite - Image */}
          <div className="hidden md:block w-1/2 bg-gray-100 p-8">
            <img src={login} alt="Login visual" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
