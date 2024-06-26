import type { PageParams } from "@/types/next";
import { Layout } from "@/components/layout/Layout";
import { Footer } from "../../components/common/Footer";
import { NavBar } from "../../components/common/NavBar";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <>
      <NavBar />
      <div className="flex h-full w-full flex-col items-center max-md:p-4">
        <Layout className="card my-8 max-w-2xl space-y-4 p-16 max-md:my-0 max-md:p-8">
          <h1 className="text-3xl">{`CONDITIONS D'UTILISATION`}</h1>
          <p className="text-muted-foreground">
            Dernière mise à jour : 26 juin 2024
          </p>
          <h2 className="pt-4 text-2xl">Bienvenue</h2>
          <p>{`Bienvenue sur EditBag (« Service » ou « Plateforme »). Ces conditions d'utilisation (« Conditions ») régissent votre accès et votre utilisation de notre service SaaS fourni par EditBag (« nous », « notre » ou « nos »). En accédant ou en utilisant notre service, vous acceptez d'être lié par ces Conditions. Si vous n'acceptez pas toutes les Conditions, vous ne devez pas utiliser notre service.`}</p>

          <h2 className="pt-4 text-2xl">1. Définitions</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>{`« Fichiers multimédias numériques » désigne toutes les images, animations, films, vidéos ou autres représentations audio/visuelles enregistrées dans un format ou une forme lisible par ordinateur et obtenues, directement ou indirectement, auprès de EditBag.`}</li>
            <li>{`« Produits EditBag » désigne les fichiers multimédias numériques, les services et le logiciel EditBag.`}</li>
            <li>{`« Logiciel EditBag » désigne les applications logicielles et les extensions fournies par EditBag, accessibles par téléchargement ou via le site web géré par EditBag à l'adresse www.editbag.com.`}</li>
            <li>{`« Prix d'achat » désigne le prix d'achat, les frais d'adhésion ou la structure tarifaire que l'utilisateur a sélectionné ou qu'il sélectionnera lors du processus d'inscription pour l'utilisation des Produits EditBag.`}</li>
            <li>{`« Services » désigne le service de montage vidéo et d'édition numérique fourni par EditBag, tel que modifié et/ou renommé et/ou annulé par EditBag de temps à autre, à sa seule discrétion.`}</li>
            <li>{`« Fournisseur de logiciels tiers » désigne toute partie autre que EditBag qui fournit son logiciel propriétaire aux utilisateurs autorisés.`}</li>
            <li>{`« Utiliser » signifie accéder, installer, télécharger, copier, distribuer, modifier, utiliser ou bénéficier de toute autre manière de l'utilisation des fonctionnalités de l'un des produits EditBag.`}</li>
          </ul>

          <h2 className="pt-4 text-2xl">2. Utilisation du Service</h2>
          <h3 className="pt-2 text-xl">2.1 Admissibilité</h3>
          <p>{`Vous devez être âgé d'au moins 18 ans pour utiliser notre service. En utilisant notre service, vous confirmez que vous avez au moins 18 ans.`}</p>
          <h3 className="pt-2 text-xl">2.2 Inscription</h3>
          <p>{`Pour accéder à certaines fonctionnalités du service, vous devez créer un compte. Vous vous engagez à fournir des informations exactes, complètes et à jour lors de votre inscription. Vous êtes responsable de la confidentialité de votre mot de passe et de toutes les activités qui se produisent sous votre compte.`}</p>
          <h3 className="pt-2 text-xl">2.3 Utilisation Acceptable</h3>
          <p>{`Vous acceptez de ne pas utiliser le service de manière à violer les lois applicables, à porter atteinte aux droits de propriété intellectuelle, ou à nuire à d'autres utilisateurs. Toute utilisation frauduleuse, abusive ou autrement illégale du service est strictement interdite.`}</p>

          <h2 className="pt-4 text-2xl">3. Abonnements et Paiements</h2>
          <h3 className="pt-2 text-xl">{`3.1 Plans d'Abonnement`}</h3>
          <p>{`Nous offrons différents plans d'abonnement. Les détails des plans et les frais applicables sont disponibles sur notre site web. Les frais sont facturés à l'avance sur une base récurrente (mensuelle ou annuelle) selon le plan choisi.`}</p>
          <h3 className="pt-2 text-xl">3.2 Paiements</h3>
          <p>{`Tous les paiements doivent être effectués via notre processeur de paiement tiers. En fournissant vos informations de paiement, vous autorisez notre processeur de paiement à débiter les frais applicables de votre compte.`}</p>
          <h3 className="pt-2 text-xl">3.3 Renouvellement et Annulation</h3>
          <p>{`Votre abonnement sera automatiquement renouvelé à la fin de chaque période d'abonnement, sauf si vous annulez votre abonnement avant la date de renouvellement. Les frais de renouvellement sont facturés au tarif alors en vigueur. Vous pouvez annuler votre abonnement à tout moment via les paramètres de votre compte.`}</p>

          <h2 className="pt-4 text-2xl">
            4. Contenu et Droits de Propriété Intellectuelle
          </h2>
          <h3 className="pt-2 text-xl">4.1 Votre Contenu</h3>
          <p>{`Vous conservez tous les droits sur le contenu que vous téléchargez du service (« Votre Contenu »).`}</p>
          <h3 className="pt-2 text-xl">4.2 Contenu de la Plateforme</h3>
          <p>{`Tout le contenu disponible sur notre service, y compris mais sans s'y limiter, les textes, graphiques, logos, images, clips audio et vidéo, ainsi que leur sélection et arrangement, est la propriété de EditBag ou de ses concédants de licence et est protégé par les lois sur la propriété intellectuelle.`}</p>

          <h2 className="pt-4 text-2xl">5. Confidentialité</h2>
          <p>{`Nous respectons votre vie privée. Veuillez consulter notre Politique de Confidentialité pour plus d'informations sur la manière dont nous collectons, utilisons et divulguons vos informations personnelles.`}</p>

          <h2 className="pt-4 text-2xl">6. Limitations de Responsabilité</h2>
          <h3 className="pt-2 text-xl">6.1 Exclusion de Garanties</h3>
          <p>{`Le service est fourni « tel quel » et « tel que disponible ». Nous déclinons toute garantie de quelque nature que ce soit, expresse ou implicite, y compris, mais sans s'y limiter, les garanties de qualité marchande, d'adéquation à un usage particulier, et de non-violation.`}</p>
          <h3 className="pt-2 text-xl">6.2 Limitation de Responsabilité</h3>
          <p>{`En aucun cas, EditBag, ses filiales, ou leurs directeurs, employés ou agents, ne seront responsables des dommages indirects, accessoires, spéciaux, consécutifs ou punitifs, y compris, sans s'y limiter, la perte de profits, de données, d'utilisation, ou autres pertes intangibles, résultant de (i) votre accès à ou utilisation de, ou incapacité d'accéder ou d'utiliser le service ; (ii) tout comportement ou contenu de tiers sur le service ; ou (iii) tout contenu obtenu du service.`}</p>

          <h2 className="pt-4 text-2xl">7. Modifications des Conditions</h2>
          <p>{`Nous nous réservons le droit de modifier ces Conditions à tout moment. Si nous apportons des modifications importantes, nous vous en informerons par email ou par un avis sur notre site web. Votre utilisation continue du service après de telles modifications constitue votre acceptation des nouvelles Conditions.`}</p>

          <h2 className="pt-4 text-2xl">8. Résiliation</h2>
          <p>{`Nous pouvons résilier ou suspendre votre accès au service immédiatement, sans préavis ni responsabilité, pour toute raison, y compris, sans limitation, si vous violez ces Conditions. En cas de résiliation, votre droit d'utiliser le service cessera immédiatement.`}</p>

          <h2 className="pt-4 text-2xl">9. Dispositions Générales</h2>
          <h3 className="pt-2 text-xl">9.1 Droit Applicable</h3>
          <p>{`Ces Conditions sont régies et interprétées conformément aux lois de l'État du Sénégal.`}</p>
          <h3 className="pt-2 text-xl">9.2 Résolution des Litiges</h3>
          <p>{`Tout litige découlant de ou lié à ces Conditions ou au service sera résolu par arbitrage exécutoire conformément aux règles d'arbitrage commercial.`}</p>
          <h3 className="pt-2 text-xl">{`9.3 Intégralité de l'Accord`}</h3>
          <p>{`Ces Conditions constituent l'intégralité de l'accord entre vous et EditBag concernant le service et remplacent tous les accords antérieurs ou contemporains.`}</p>
          <h3 className="pt-2 text-xl">9.4 Divisibilité</h3>
          <p>{`Si une disposition de ces Conditions est jugée invalide ou inapplicable, les autres dispositions resteront en vigueur.`}</p>
          <h3 className="pt-2 text-xl">9.5 Renonciation</h3>
          <p>{`Aucune renonciation à un terme de ces Conditions ne sera considérée comme une renonciation ultérieure ou continue à ce terme ou à tout autre terme, et le fait pour EditBag de ne pas faire valoir un droit ou une disposition en vertu de ces Conditions ne constitue pas une renonciation à ce droit ou à cette disposition.`}</p>

          <h2 className="pt-4 text-2xl">10. Politique de Remboursement</h2>
          <p>{`Vous n'aurez droit à un remboursement de tous les frais qui nous ont été payés que si (1) vous annulez votre abonnement dans les 5 jours calendaires à compter de la date de son achat et/ou de son renouvellement (« Période de remboursement ») et (2) vous n'avez pas téléchargé de produits EditBag pendant cette période de remboursement. Vous comprenez et acceptez par la présente que vous n'aurez droit à aucun remboursement si : (i) vous ne demandez pas de remboursement à EditBag pendant la période de remboursement ; ou (ii) vous téléchargez des produits EditBag à partir du site Web pendant la période de remboursement.`}</p>
          <p>{`Pour éviter toute ambiguïté, cette section 10 ne s'applique pas aux comptes gratuits, et par conséquent, si vous êtes abonné avec un compte gratuit, vous n'aurez droit à aucun remboursement.`}</p>

          <h2 className="pt-4 text-2xl">Contact</h2>
          <p>
            {`Pour toute question concernant ces Conditions, veuillez nous contacter à `}
            <a
              href="mailto:editbagsaas@gmail.com"
              className="ml-2 text-[#fbc466] hover:underline"
            >
              editbagsaas@gmail.com
            </a>
          </p>
        </Layout>
        <Footer />
      </div>
    </>
  );
}
