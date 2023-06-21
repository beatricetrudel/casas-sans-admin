"use client";

// Importation des bibliothèques et des composants nécessaires
import Container from "@/app/components/Container";

// Définition des propriétés du composant PropertiesClient
interface PropertiesClientProps {}

// Définition du composant PropertiesClient
const Blog: React.FC<PropertiesClientProps> = ({}) => {
  // Rendu du composant
  return (
    <Container>
      <section
        className='py-24 bg-white'
        style={{
          backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left top',
        }}
      >
        <div className='container px-4 mx-auto'>
          <div className='md:max-w-5xl mx-auto mb-16 text-center'>
            <span className='inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-full shadow-sm'>
              Blog
            </span>
            <h3 className='mb-4 text-3xl md:text-5xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter'>
            Notre mission : Rendre le savoir et les actualités accessibles à tous.
            </h3>
            <p className='text-lg md:text-xl text-coolGray-500 font-medium'>
            Explorez notre blog pour des conseils et astuces pour une expérience Casas inoubliable.
            </p>
          </div>
          <div className='flex flex-wrap -mx-4 mb-12 md:mb-20'>
            <div className='w-full md:w-1/2 px-4 mb-8'>
              <a className='block mb-6 overflow-hidden rounded-md' href='#'>
                <img
                  className='w-full'
                  src='images/design.png'
                  alt=''
                />
              </a>
              <a
                className='inline-block mb-4 text-2xl md:text-3xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline'
                href='/blog/article1'
              >
                Découvrez comment rendre votre expérience Casas inoubliable.
              </a>
              <a
                className='inline-flex items-center text-base md:text-lg text-green-500 hover:text-green-600 font-semibold'
                href='/blog/article1'
              >
                <span className='mr-3'>Lire l&apos;article</span>
                <svg
                  width={8}
                  height={10}
                  viewBox='0 0 8 10'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z'
                    fill='currentColor'
                  />
                </svg>
              </a>
            </div>
            <div className='w-full md:w-1/2 px-4 mb-8'>
              <a className='block mb-6 overflow-hidden rounded-md' href='#'>
                <img
                  className='w-full'
                  src='images/design24.png'
                  alt=''
                />
              </a>
              <a
                className='inline-block mb-4 text-2xl md:text-3xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline'
                href='/blog/article2'
              >
                Les secrets pour réussir en tant qu&apos;hôte Casas.
              </a>
              <a
                className='inline-flex items-center text-base md:text-lg text-green-500 hover:text-green-600 font-semibold'
                href='/blog/article2'
              >
                <span className='mr-3'>Lire l&apos;article</span>
                <svg
                  width={8}
                  height={10}
                  viewBox='0 0 8 10'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z'
                    fill='currentColor'
                  />
                </svg>
              </a>
            </div>
            <div className='w-full md:w-1/2 px-4 mb-8'>
              <a className='block mb-6 overflow-hidden rounded-md' href='#'>
                <img
                  className='w-full'
                  src='images/design23.png'
                  alt=''
                />
              </a>
              <a
                className='inline-block mb-4 text-2xl md:text-3xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline'
                href='/blog/article3'
              >
                Les meilleures pratiques pour trouver le logement idéal sur Casas.
              </a>
              <a
                className='inline-flex items-center text-base md:text-lg text-green-500 hover:text-green-600 font-semibold'
                href='/blog/article3'
              >
                <span className='mr-3'>Lire l&apos;article</span>
                <svg
                  width={8}
                  height={10}
                  viewBox='0 0 8 10'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z'
                    fill='currentColor'
                  />
                </svg>
              </a>
            </div>
            <div className='w-full md:w-1/2 px-4 mb-8'>
              <a className='block mb-6 overflow-hidden rounded-md' href='#'>
                <img
                  className='w-full'
                  src='images/design22.png'
                  alt=''
                />
              </a>
              <a
                className='inline-block mb-4 text-2xl md:text-3xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline'
                href='#'
              >
                Comment maximiser vos revenus en tant qu&apos;hôte Casas.
              </a>
              <a
                className='inline-flex items-center text-base md:text-lg text-green-500 hover:text-green-600 font-semibold'
                href='#'
              >
                <span className='mr-3'>Lire l&apos;article</span>
                <svg
                  width={8}
                  height={10}
                  viewBox='0 0 8 10'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z'
                    fill='currentColor'
                  />
                </svg>
              </a>
            </div>
            <div className='w-full md:w-1/2 px-4 mb-8 md:mb-0'>
              <a className='block mb-6 overflow-hidden rounded-md' href='#'>
                <img
                  className='w-full'
                  src='images/design21.png'
                  alt=''
                />
              </a>
              <a
                className='inline-block mb-4 text-2xl md:text-3xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline'
                href='#'
              >
                Les astuces pour attirer les voyageurs sur votre annonce Casas.
              </a>
              <a
                className='inline-flex items-center text-base md:text-lg text-green-500 hover:text-green-600 font-semibold'
                href='#'
              >
                <span className='mr-3'>Lire l&apos;article</span>
                <svg
                  width={8}
                  height={10}
                  viewBox='0 0 8 10'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z'
                    fill='currentColor'
                  />
                </svg>
              </a>
            </div>
            <div className='w-full md:w-1/2 px-4'>
              <a className='block mb-6 overflow-hidden rounded-md' href='#'>
                <img
                  className='w-full'
                  src='images/design20.png'
                  alt=''
                />
              </a>
              <a
                className='inline-block mb-4 text-2xl md:text-3xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-bold hover:underline'
                href='#'
              >
                Les tendances Casas à ne pas manquer : conseils et recommandations.
              </a>
              <a
                className='inline-flex items-center text-base md:text-lg text-green-500 hover:text-green-600 font-semibold'
                href='#'
              >
                <span className='mr-3'>Lire l&apos;article</span>
                <svg
                  width={8}
                  height={10}
                  viewBox='0 0 8 10'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z'
                    fill='currentColor'
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className='flex justify-center mx-auto max-w-max bg-white border border-coolGray-100 rounded-md shadow-lg'></div>
        </div>
      </section>
    </Container>
  );
};

// Export du composant pour pouvoir l'utiliser ailleurs dans l'application
export default Blog;
