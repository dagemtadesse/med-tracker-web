import { useLayoutEffect, useRef, useState } from "react";
import { ArrowLeft, ChevronDoubleDown } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const TermsAndConditions = () => {
  const contianerRef = useRef<HTMLDivElement>(null);
  const [bottomReached, setBottomReached] = useState(false);

  const scrollToBottom = () => {
    if (contianerRef.current) {
      const div = contianerRef.current;
      div.scrollBy({
        top: div.scrollHeight - div.clientHeight,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    const div = contianerRef.current;
    if (div) {
      setBottomReached(div.scrollHeight - div.clientHeight == div.scrollTop);
    }
  };

  return (
    <>
      <header className="w-[956px] mx-auto py-12 px-8 text-textDark">
        <img src={Logo} className="w-[100px]" />
      </header>
      <main className="text-textGrey">
        <div className="bg-white p-6 rounded-3xl mx-auto max-w-2xl max-h-[90vh] flex flex-col h-[calc(100vh-132px)] mb-8">
          <Link className="flex justify-start items-center gap-4" to="/">
            <ArrowLeft size="24" /> <span>Back</span>
          </Link>

          <div className="px-10 py-6 text-textDark">
            <h1 className="font-bold text-4xl capitalize leading-normal">
              terms and
              <br />
              conditions
            </h1>
          </div>

          <div className="w-full p-1 grow text-sm relative overflow-hidden">
            <div
              className="h-full overflow-auto smooth-scroll"
              ref={contianerRef}
              onScroll={handleScroll}
            >
              <div className="px-10 text-textGrey">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
                suscipit rerum nam eveniet quia eum obcaecati? Aperiam expedita
                eaque et dolores nisi dolore minima ducimus, ut ab adipisci quod
                totam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quam, labore esse explicabo dolor eveniet iusto fugiat quis vel
                ipsa, enim minima asperiores facilis tenetur aut dolorem
                eligendi qui deleniti mollitia. Sapiente deleniti maxime omnis
                ea, nam delectus eum corrupti expedita unde vitae! Velit sequi
                sit necessitatibus delectus ut distinctio. Soluta et laudantium
                culpa suscipit modi inventore dolorem harum eius obcaecati.
                Repellat molestias non, soluta ipsam velit earum odit. Nisi enim
                eos, id dolorum ut dicta porro facere pariatur temporibus eius
                nobis esse magni dignissimos quia exercitationem harum culpa.
                Recusandae, dolores? Iste quae nesciunt praesentium nulla. Ipsa,
                molestiae nemo debitis nam sit aliquam magni consequuntur
                molestias dolores architecto modi ratione tenetur qui veniam
                recusandae, a facere tempore, culpa doloribus possimus quidem!
                Sit et odit est, veritatis mollitia eaque quibusdam pariatur
                veniam dignissimos fugiat, nobis cumque earum dolorem, quaerat
                dicta maiores quia porro incidunt cum at doloremque aut? Atque
                sit hic officiis? Quis sequi nihil iusto. Repudiandae, a.
                Corporis, totam quisquam aliquid aperiam in optio velit,
                recusandae eius assumenda ducimus iure commodi voluptas
                aspernatur aliquam id doloribus qui repellat quaerat ad eum! In
                nesciunt libero dolore. Excepturi corporis ut aspernatur esse,
                libero nihil eum, veniam, et animi consequuntur assumenda sit
                dolore est? Pariatur, facere! Quaerat reiciendis nam harum
                voluptatibus accusantium corrupti exercitationem. Quibusdam
                deserunt laudantium libero perspiciatis voluptatibus, rerum nam
                voluptatum ducimus ullam blanditiis, vel magnam, veritatis
                dolore sunt inventore? Sit consectetur doloribus saepe
                perspiciatis consequatur possimus optio quibusdam fugiat quia
                voluptas? Dolores sed officia incidunt commodi dolore, magnam
                sit quaerat omnis assumenda ducimus repellat illum? Itaque
                nihil, explicabo debitis minus voluptas inventore possimus
                excepturi eius quis voluptatibus accusantium tenetur omnis quos.
                A recusandae nostrum doloremque quas animi cupiditate eum.
                Deserunt fuga esse cum ex ad iste architecto iure sapiente rerum
                praesentium sequi rem quam beatae et dignissimos nulla, quae
                impedit sed. Delectus doloribus facere quos labore repellat
                commodi molestias natus, repudiandae fugiat obcaecati. Ab saepe,
                dolorum esse laboriosam culpa labore delectus recusandae odit.
                Architecto consequuntur temporibus maiores magnam nesciunt, ab
                quae. Quisquam iure minus sed voluptatem sapiente ipsam
                consequuntur consequatur modi porro ducimus omnis libero, enim
                eaque beatae nostrum error dolores ab. Ipsa aut earum sapiente
                modi commodi est, tempora voluptatum! Qui dolor quis
                perspiciatis aliquam adipisci sint. Commodi repudiandae,
                obcaecati nihil odit dicta labore corrupti porro. Obcaecati
                minus labore fugit, numquam vel nihil pariatur velit
                voluptatibus quod error molestias vitae. Ipsam corrupti animi
                adipisci possimus consequuntur illo, quod facilis totam nobis
                unde at tempore? Esse suscipit quasi nihil. Aut atque
                perferendis expedita, eaque doloremque praesentium nisi totam
                alias! Nihil, totam! Dolores vitae beatae eius repellat cumque
                cupiditate numquam necessitatibus. Natus expedita aut itaque,
                aperiam laborum in vitae, sint dolor numquam quos necessitatibus
                provident? Sint, corrupti? Tenetur eveniet nobis molestias ex.
                Adipisci hic corrupti, sapiente explicabo aliquam nobis culpa
                aspernatur voluptatibus doloremque quas modi ipsum deserunt quam
                vel ex laborum est quae esse laboriosam? Voluptatum inventore
                pariatur aspernatur itaque! Non, tempore! Esse cum, nulla
                beatae, cupiditate vero debitis voluptas fuga minima, sapiente
                velit ipsum ullam repellat consequuntur. Dolorum sequi veritatis
                culpa obcaecati beatae enim perspiciatis libero deleniti
                corporis voluptatem, temporibus ut. Repellat obcaecati vitae
                voluptate accusamus voluptatibus qui corrupti totam saepe neque
                mollitia distinctio, recusandae impedit a maiores unde odit
                omnis reprehenderit placeat! Iusto suscipit quisquam maiores eos
                iste accusantium voluptatibus! Minima voluptate, dicta eveniet
                itaque exercitationem tempore. Illo fugit atque iste facilis
                placeat et, blanditiis aut ex dolorum suscipit laboriosam eaque,
                non, voluptas voluptates aliquid! Tempora placeat harum quis a.
                Adipisci repellendus quisquam neque molestias, et repellat
                pariatur molestiae temporibus excepturi dignissimos consectetur
                quos, maiores sapiente asperiores eveniet! Optio nemo, corporis
                ut dolorum praesentium quidem voluptatum voluptatibus et rem
                expedita. Nobis sequi voluptatibus nesciunt, quisquam aut
                doloribus impedit reprehenderit omnis cupiditate enim quo nemo
                dolor soluta culpa, deserunt ad. Voluptatibus, sequi animi
                impedit sed incidunt excepturi minima architecto et perferendis!
                Odit veniam, assumenda illo necessitatibus laudantium reiciendis
                iste quam laborum tempore rem, explicabo laboriosam ullam fuga,
                suscipit tempora veritatis et minus impedit totam voluptatibus
                at consequuntur? Accusamus reprehenderit numquam facere? Debitis
                earum vel ex ratione harum, quaerat sit magni accusantium at,
                quisquam esse iste modi quo! Deleniti, enim. Dolor praesentium
                voluptates voluptatum eaque laudantium nesciunt dolores aperiam
                distinctio non libero? Quod veritatis, tempore temporibus eos
                nostrum ex officia. Dolore ipsum blanditiis, sequi dolor tempora
                commodi voluptate maiores. Saepe natus pariatur quam nesciunt,
                et quaerat incidunt facere, cumque aperiam, aspernatur
                recusandae! Id ullam deserunt, voluptas officiis eaque est atque
                sunt provident perspiciatis magnam laboriosam rerum maxime.
                Nulla suscipit nemo maxime facere distinctio praesentium,
                repellat voluptate beatae iure, et a ducimus earum. In inventore
                tempore architecto ut laboriosam accusamus incidunt deserunt
                aliquam perferendis quas quia culpa, est velit. Aspernatur
                deserunt autem laudantium? Delectus ut itaque iusto voluptatum
                quis ab assumenda vitae aliquam? Molestias consequatur ullam
                maiores ratione illo dolorem aliquam expedita, magnam repellat
                molestiae sequi facilis accusantium totam voluptatem eum a et
                similique cum, laboriosam eos. Itaque cum eum fugit aspernatur
                nihil! Corporis vitae ullam quam odio necessitatibus laudantium,
                itaque expedita quibusdam sint, doloribus iusto porro nulla
                eligendi consequatur beatae a odit sequi quisquam provident nam
                consequuntur deleniti commodi facilis. Quisquam, obcaecati!
                Cupiditate nam numquam expedita nostrum nemo officiis quisquam
                atque consequuntur, sed ex? Asperiores adipisci minus nam
                aliquam quisquam enim perspiciatis reprehenderit distinctio?
                Deleniti porro nam molestiae blanditiis sint! Architecto, fugit!
                Similique distinctio nam laborum et explicabo corrupti nihil
                nulla ex est quasi maiores architecto placeat, consequuntur
                accusamus rerum sunt, adipisci delectus fugit cumque asperiores
                atque minus quod neque commodi? Id? Impedit sit cupiditate
                aliquid culpa doloremque expedita incidunt quas at tempora?
                Aliquid commodi maxime libero distinctio ab voluptas recusandae,
                repellat eius hic obcaecati eligendi nam tempora laudantium
                saepe corrupti quae! Natus, ratione ab maiores mollitia labore
                ea nemo aliquid numquam et soluta aspernatur, accusamus saepe
                suscipit, amet doloribus perspiciatis tempora aliquam ducimus
                vero! Totam officiis tenetur similique non temporibus nostrum?
                Iure alias molestias doloribus earum odit, quasi modi aperiam
                illo dolores reiciendis fugiat sunt blanditiis dolore architecto
                dolorem accusantium neque facere? Natus quos similique labore
                sapiente ad! Odit, quo fugiat? Quos beatae deleniti ducimus
                minima dolore animi mollitia cupiditate eius voluptates
                molestiae repellat minus labore, obcaecati, cum, veniam quasi
                omnis laborum unde magni placeat exercitationem! Aliquid cum
                natus maxime optio. Deleniti fugiat dolorum vitae in at fugit
                laudantium optio voluptates nihil, atque labore laborum sit
                doloribus tenetur suscipit autem iste perferendis amet
                molestiae? Eos, hic accusamus. Animi, debitis iure? Asperiores.
                Perferendis cupiditate autem consequatur similique. Corporis
                odit voluptatem beatae quasi delectus, officia saepe, quae nobis
                voluptatibus laborum, rem expedita laboriosam quibusdam pariatur
                consequuntur quo tenetur qui suscipit tempore? Quae, quam!
                Expedita fugiat velit beatae labore, nesciunt, tenetur debitis
                maiores officiis adipisci quo quis. Aspernatur, vero autem
                eveniet esse dolores illo earum atque modi nostrum ipsum eum at,
                recusandae quod illum! Velit temporibus maiores eaque deleniti
                incidunt. Accusamus minus officia illo eaque, explicabo quasi
                amet in ad tenetur fugiat, earum est possimus praesentium labore
                ex, quam unde iusto ipsa fuga rerum! At voluptatem laboriosam
                vel laborum quaerat eum fugiat quisquam alias. Beatae recusandae
                autem itaque perspiciatis vel magnam unde error? Neque eaque
                voluptatibus aut enim est consequuntur ipsum, at recusandae
                magnam! Adipisci, iure expedita. Aspernatur quis placeat atque
                ullam consequatur maxime dicta. Eius tenetur unde repudiandae
                nobis? Numquam ea cupiditate, voluptate, sequi quae iusto labore
                asperiores vero repellat, rerum porro quaerat. Ipsam accusamus
                rem aliquid dolorem esse. Ipsam est amet sapiente cumque
                blanditiis accusantium eum aliquid at harum, pariatur aspernatur
                tempore quisquam labore excepturi odit, repellendus, dolorem
                quidem perferendis architecto quae? Aperiam minus, in similique
                consectetur id maiores quo laborum nesciunt corporis est eius
                atque accusamus rerum qui! Inventore totam quibusdam debitis
                corporis exercitationem, vitae esse, sed aperiam ea tempore
                doloremque. Corporis, accusantium officia maxime impedit amet
                dicta molestiae optio ratione eveniet, modi nam commodi quis
                accusamus. Fugiat adipisci ut, beatae minus architecto atque
                dicta debitis, fuga excepturi alias libero cumque. Ipsa maxime
                nostrum quam nisi reprehenderit maiores recusandae praesentium
                aspernatur quo quaerat et repellat numquam aliquam atque
                voluptate, labore at ad cum aut dignissimos odio. Asperiores
                assumenda numquam vitae libero! Placeat nesciunt illum
                voluptate! Natus molestias ipsam voluptatibus temporibus
                deleniti ad voluptatum quaerat officiis animi, quas libero
                cumque sunt quis pariatur accusantium tenetur alias inventore
                aliquam iusto tempora enim assumenda. Numquam omnis porro
                temporibus a praesentium ea, dignissimos suscipit esse neque
                libero. Eum temporibus deleniti et perferendis cumque illum
                error dolores id sunt facere. Est repudiandae autem alias
                adipisci facere? Nisi expedita eaque eveniet tempore, fugiat
                excepturi nesciunt voluptatem repellat doloribus deserunt ullam
                nostrum accusamus repellendus provident maxime error hic!
                Reiciendis asperiores veniam odio iusto et. Hic debitis deleniti
                error! Sunt repudiandae deleniti quae laboriosam iste illo
                debitis quam amet labore voluptatum fugiat molestias at
                recusandae, quod similique minus deserunt. Minima nulla
                laudantium exercitationem facere odio, consequuntur dolorem
                tempora sequi. Ipsa doloribus ullam consequatur distinctio est
                dolore, laudantium molestias odit velit adipisci impedit
                similique culpa eum, ut necessitatibus doloremque ducimus
                possimus tempore placeat dignissimos cumque. Nemo dicta ipsum
                itaque similique. Architecto a veritatis sapiente laborum
                asperiores rerum reprehenderit numquam quae ullam ipsum
                repellendus, sit tenetur similique enim ex? Provident inventore
                doloremque qui optio dolor ipsum quaerat porro voluptatibus illo
                tempore? Recusandae nam tenetur voluptates distinctio harum
                possimus illum, accusamus laboriosam iste eos, necessitatibus
                adipisci corrupti sed! Reiciendis nulla voluptatibus repellendus
                dolorum accusamus fugit, magni laborum? Adipisci voluptas vero
                velit fugiat. Dolorum ipsa voluptatibus, libero id, iusto minima
                vitae deserunt aliquid, ipsum facere consequatur eos consectetur
                asperiores ipsam? Commodi sed quae corporis inventore ut tenetur
                omnis ipsam, rem dolores placeat illum? Labore illo tempora
                facere expedita odit suscipit voluptas sequi alias quidem
                aperiam asperiores, sapiente soluta eveniet hic dignissimos,
                esse non quisquam, recusandae exercitationem! A adipisci
                obcaecati quaerat expedita doloribus nam! Quia quisquam neque
                rem molestias. Doloribus corporis dolorum ullam illo veniam
                quidem amet repellat nisi maiores ea excepturi, dignissimos
                suscipit possimus nostrum harum nobis voluptas, perferendis id
                enim, maxime sint? Obcaecati, deserunt rerum est nihil pariatur
                ducimus blanditiis, culpa facilis sequi soluta eligendi non
                consequatur enim. Autem, corporis explicabo eveniet, rerum
                voluptate, voluptates quae fuga deleniti officiis temporibus
                iste veritatis! Quos sapiente similique aspernatur consectetur
                odio corrupti hic sint? Provident temporibus sint autem ipsum
                harum dignissimos maxime consequuntur pariatur, eum quam ducimus
                quo adipisci, maiores id impedit quia, ex cum! Sit eius
                doloremque atque delectus, soluta est obcaecati illum quisquam
                ipsam consectetur ex, voluptatum, incidunt harum reprehenderit
                quae veritatis odit laboriosam voluptate! A labore quia, earum
                qui harum laudantium animi. Harum obcaecati dolorem quo beatae,
                inventore recusandae odit natus sunt doloremque vitae nulla,
                fugiat hic quia magni ullam id iure totam tenetur ea molestiae
                exercitationem itaque vero. Dicta, suscipit accusantium.
                Excepturi modi atque ipsum doloribus quibusdam, neque distinctio
                maxime deleniti alias accusamus maiores delectus accusantium
                ullam cum harum, numquam nemo eius repellendus expedita illum
                tempore! Repellendus excepturi deleniti inventore vel! Dolor
                illo ea earum magnam, accusantium sit, dicta tenetur nulla
                cupiditate, beatae quo! Nesciunt laudantium eaque iusto et, esse
                itaque ea fugit suscipit beatae, molestiae ullam. Sunt laborum
                eius reprehenderit. Laborum nostrum officiis cumque nulla
                accusantium velit animi! Veniam saepe consequuntur accusamus,
                nesciunt eaque quos provident, suscipit praesentium in rerum ea
                facilis laudantium architecto, consequatur eos sint! Fugiat,
                tempora labore. Fuga, dolore autem reiciendis quis ipsam natus
                tenetur consectetur perferendis labore tempore, a nulla earum
                harum sequi necessitatibus quisquam porro eos quos obcaecati
                suscipit blanditiis vitae vero adipisci libero! Eum! Aperiam
                possimus nam doloribus placeat! Eaque at laudantium consequatur
                atque quia nihil laborum reprehenderit animi? Ut, sint
                explicabo. Quis eos animi totam velit consectetur necessitatibus
                libero, sunt incidunt eveniet. Pariatur! Molestias, sunt eum
                accusamus maiores itaque exercitationem facere! Eligendi
                recusandae illo libero et, ullam nobis corporis aspernatur!
                Recusandae harum repudiandae suscipit impedit quisquam beatae
                facere cupiditate laudantium delectus. Minima, est. At quasi,
                sequi molestiae officia adipisci ipsam excepturi hic molestias
                tenetur unde nihil quis, saepe quae dignissimos quia
                reprehenderit eligendi. Fugiat nihil rerum tenetur esse aut
                voluptates quas suscipit pariatur. Expedita quod soluta ipsum
                dolorum, perspiciatis delectus vero cupiditate ex blanditiis
                iure dolores ut, magnam numquam, architecto repellat! Quasi
                saepe possimus accusantium odio. Laboriosam velit fuga excepturi
                sint, quas dolore! Alias laboriosam veniam reprehenderit nihil
                blanditiis necessitatibus deleniti? Ex in beatae quam aliquid,
                harum eveniet placeat aut animi natus tempore repellat corrupti
                ipsum libero officiis vero cupiditate! Officia, adipisci labore?
                Neque quidem voluptas veritatis, blanditiis accusantium minus,
                itaque nostrum inventore impedit nesciunt facilis harum placeat
                nihil quaerat sapiente mollitia! Optio error, ut dolorum
                voluptatem commodi deleniti nisi id consequatur laudantium!
                Impedit praesentium dolore libero est explicabo delectus
                accusamus exercitationem magnam animi harum, minima quaerat,
                rerum voluptatum nihil error perspiciatis numquam vitae
                laudantium quas quis ea porro labore ab. Fugiat, voluptas?
                Dolorem, eum velit corrupti, suscipit vero illo nisi neque alias
                nobis exercitationem mollitia explicabo sequi laudantium maxime
                placeat nostrum, enim possimus aliquid! Tempora laboriosam rem
                quas possimus eaque, cupiditate fugiat. Obcaecati voluptatum
                sunt, cupiditate recusandae quia error at vero deserunt commodi
                voluptate inventore aspernatur maxime beatae tempora, sapiente
                voluptas! Illum, ad praesentium cumque laboriosam inventore
                temporibus quasi sint laborum esse. Et quia dolor iure omnis
                molestias facilis cumque cum deleniti repudiandae officia ipsa
                temporibus vitae maiores, rerum quaerat mollitia asperiores unde
                voluptate autem voluptatem aspernatur. Quibusdam corrupti
                laboriosam nobis quaerat? Repudiandae maiores consequuntur ipsa
                ipsum laborum impedit magnam tempora illo ut nemo blanditiis
                nisi similique reiciendis recusandae, consectetur placeat in
                adipisci eligendi. Nihil quia optio mollitia hic nam ab
                repellendus. Reiciendis labore consectetur pariatur sint
                adipisci! Excepturi nisi ullam atque. Dolor expedita a dolore
                iste distinctio? Sequi nesciunt quidem voluptatum temporibus
                cupiditate voluptatibus animi veniam amet, sapiente eaque
                mollitia iusto. Corporis, natus adipisci rem quisquam est, fugit
                optio dolor, praesentium libero hic nobis. Obcaecati dignissimos
                ut adipisci! Facere dolore officia voluptas vel non qui dolorem
                quia deleniti? Reiciendis, blanditiis obcaecati.
              </div>
            </div>
            {!bottomReached && (
              <div className="absolute bottom-0  w-full py-3 flex justify-center text-textGrey bg-gradient-to-b from-transparent to-white">
                <button onClick={scrollToBottom}>
                  <ChevronDoubleDown size="32" className="drop-shadow-md" />
                </button>
              </div>
            )}
          </div>

          <div className="flex justify-between pt-4 px-10">
            <Link
              to="/"
              className="rounded-full text-center shadow-md hover:shadow-lg uppercase px-10 py-3 text-white bg-gray-500 w-[200px]"
            >
              decline
            </Link>

            <Link
              to={bottomReached ? "/login" : ""}
              className={`rounded-full text-center shadow-md hover:shadow-lg uppercase px-10 py-3 text-white bg-solidBlue w-[200px] ${
                bottomReached ? "opacity-100" : "opacity-40"
              }`}
            >
              accept
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default TermsAndConditions;
