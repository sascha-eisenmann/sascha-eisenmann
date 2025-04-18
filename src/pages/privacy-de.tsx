import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { graphql, Link as GatsbyLink } from 'gatsby'
import { Footer } from '../components/shared/footer/Footer'
import { Heading } from '../components/shared/heading/Heading'
import { Link } from '../components/shared/link/Link'
import { Stack } from '../components/shared/stack/Stack'
import { Text } from '../components/shared/text/Text'
import { contact, profile } from '../data/profile-de'
import { settings } from '../data/settings'
import React from 'react'
import { Helmet } from 'react-helmet'

const Privacy = () => {
  const { name } = profile.personal
  const { address, phone, email } = contact
  return (
    <React.Fragment>
      <Helmet
        title={`Datenschutzerklärung`}
        htmlAttributes={{ lang: 'de-DE' }}
      />
      <Stack
        as="main"
        direction="column"
        justify="space-between"
        gap="16px"
        css={{
          paddingTop: '3rem',
          marginInline: '4rem',
          height: 'calc(100vh - 5.5rem)',
        }}
      >
        <Stack direction="column" gap="16px">
          <Link as={GatsbyLink} to="/">
            <Stack gap="8px" align="center">
              <FontAwesomeIcon size="lg" color="grey" icon={faChevronLeft} />
              <Text css={{ fontSize: '16px' }}>Zurück</Text>
            </Stack>
          </Link>
          <Heading
            size="md"
            as="h1"
            css={{ fontWeight: 800, fontSize: '20px' }}
          >
            Datenschutz&shy;erkl&auml;rung
          </Heading>
          <Heading size="md" as="h2" css={{ letterSpacing: '3px' }}>
            1. Datenschutz auf einen Blick
          </Heading>
          <Heading size="sm" as="h3">
            Allgemeine Hinweise
          </Heading>
          <Text>
            Die folgenden Hinweise geben einen einfachen &Uuml;berblick
            dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert, wenn
            Sie diese Website besuchen. Personenbezogene Daten sind alle Daten,
            mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen.
            Ausf&uuml;hrliche Informationen zum Thema Datenschutz entnehmen Sie
            unserer unter diesem Text aufgef&uuml;hrten
            Datenschutzerkl&auml;rung.
          </Text>
          <Heading size="sm" as="h3">
            Datenerfassung auf dieser Website
          </Heading>
          <Heading size="xs" as="h4">
            Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser
            Website?
          </Heading>
          <Text>
            Die Datenverarbeitung auf dieser Website erfolgt durch den
            Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem Abschnitt
            &bdquo;Hinweis zur Verantwortlichen Stelle&ldquo; in dieser
            Datenschutzerkl&auml;rung entnehmen.
          </Text>
          <Heading size="xs" as="h4">
            Wie erfassen wir Ihre Daten?
          </Heading>
          <Text>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
            mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie
            in ein Kontaktformular eingeben.
          </Text>
          <Text>
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
            Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor
            allem technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem
            oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
            automatisch, sobald Sie diese Website betreten.
          </Text>
          <Heading size="xs" as="h4">
            Wof&uuml;r nutzen wir Ihre Daten?
          </Heading>
          <Text>
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
            der Website zu gew&auml;hrleisten. Andere Daten k&ouml;nnen zur
            Analyse Ihres Nutzerverhaltens verwendet werden.
          </Text>
          <Heading size="xs" as="h4">
            Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?
          </Heading>
          <Text>
            Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber
            Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten
            personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein
            Recht, die Berichtigung oder L&ouml;schung dieser Daten zu
            verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt
            haben, k&ouml;nnen Sie diese Einwilligung jederzeit f&uuml;r die
            Zukunft widerrufen. Au&szlig;erdem haben Sie das Recht, unter
            bestimmten Umst&auml;nden die Einschr&auml;nkung der Verarbeitung
            Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen
            ein Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde
            zu.
          </Text>
          <Text>
            Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k&ouml;nnen
            Sie sich jederzeit an uns wenden.
          </Text>
          <Heading size="md" as="h2" css={{ letterSpacing: '3px' }}>
            2. Hosting
          </Heading>
          <Text>
            Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
          </Text>
          <Heading size="sm" as="h3">
            Externes Hosting
          </Heading>
          <Text>
            Diese Website wird extern gehostet. Die personenbezogenen Daten, die
            auf dieser Website erfasst werden, werden auf den Servern des
            Hosters / der Hoster gespeichert. Hierbei kann es sich v.&nbsp;a. um
            IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
            Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige
            Daten, die &uuml;ber eine Website generiert werden, handeln.
          </Text>
          <Text>
            Das externe Hosting erfolgt zum Zwecke der Vertragserf&uuml;llung
            gegen&uuml;ber unseren potenziellen und bestehenden Kunden (Art. 6
            Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und
            effizienten Bereitstellung unseres Online-Angebots durch einen
            professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine
            entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
            ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO
            und &sect; 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung
            von Cookies oder den Zugriff auf Informationen im Endger&auml;t des
            Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne des TTDSG
            umfasst. Die Einwilligung ist jederzeit widerrufbar.
          </Text>
          <Text>
            Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit
            verarbeiten, wie dies zur Erf&uuml;llung seiner Leistungspflichten
            erforderlich ist und unsere Weisungen in Bezug auf diese Daten
            befolgen.
          </Text>
          <Text>Wir setzen folgende(n) Hoster ein:</Text>
          <Text>
            GitHub, Inc.
            <br />
            88 Colin P Kelly Jr Street <br />
            San Francisco, CA 94107 <br />
            United States
          </Text>
          <Heading size="md" as="h2" css={{ letterSpacing: '3px' }}>
            3. Allgemeine Hinweise und Pflicht&shy;informationen
          </Heading>
          <Heading size="sm" as="h3">
            Datenschutz
          </Heading>
          <Text>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer
            pers&ouml;nlichen Daten sehr ernst. Wir behandeln Ihre
            personenbezogenen Daten vertraulich und entsprechend den
            gesetzlichen Datenschutzvorschriften sowie dieser
            Datenschutzerkl&auml;rung.
          </Text>
          <Text>
            Wenn Sie diese Website benutzen, werden verschiedene
            personenbezogene Daten erhoben. Personenbezogene Daten sind Daten,
            mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen. Die
            vorliegende Datenschutzerkl&auml;rung erl&auml;utert, welche Daten
            wir erheben und wof&uuml;r wir sie nutzen. Sie erl&auml;utert auch,
            wie und zu welchem Zweck das geschieht.
          </Text>
          <Text>
            Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet
            (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitsl&uuml;cken
            aufweisen kann. Ein l&uuml;ckenloser Schutz der Daten vor dem
            Zugriff durch Dritte ist nicht m&ouml;glich.
          </Text>
          <Heading size="sm" as="h3">
            Hinweis zur verantwortlichen Stelle
          </Heading>
          <Text>
            Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf dieser
            Website ist:
          </Text>
          <Text>
            {name}
            <br />
            {address.line1}
            {address.line2 ? <br /> : undefined}
            {address.line2 ?? address.line2}
            {address.line3 ? <br /> : undefined}
            {address.line3 ?? address.line3}
          </Text>
          <Text>
            Telefon: {phone}
            <br />
            E-Mail: {email}
          </Text>
          <Text>
            Verantwortliche Stelle ist die nat&uuml;rliche oder juristische
            Person, die allein oder gemeinsam mit anderen &uuml;ber die Zwecke
            und Mittel der Verarbeitung von personenbezogenen Daten (z.&nbsp;B.
            Namen, E-Mail-Adressen o. &Auml;.) entscheidet.
          </Text>
          <Heading size="sm" as="h3">
            Speicherdauer
          </Heading>
          <Text>
            Soweit innerhalb dieser Datenschutzerkl&auml;rung keine speziellere
            Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten
            bei uns, bis der Zweck f&uuml;r die Datenverarbeitung entf&auml;llt.
            Wenn Sie ein berechtigtes L&ouml;schersuchen geltend machen oder
            eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre
            Daten gel&ouml;scht, sofern wir keine anderen rechtlich
            zul&auml;ssigen Gr&uuml;nde f&uuml;r die Speicherung Ihrer
            personenbezogenen Daten haben (z.&nbsp;B. steuer- oder
            handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall
            erfolgt die L&ouml;schung nach Fortfall dieser Gr&uuml;nde.
          </Text>
          <Heading size="sm" as="h3">
            Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung
            auf dieser Website
          </Heading>
          <Text>
            Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten
            wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1
            lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere
            Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im
            Falle einer ausdr&uuml;cklichen Einwilligung in die &Uuml;bertragung
            personenbezogener Daten in Drittstaaten erfolgt die
            Datenverarbeitung au&szlig;erdem auf Grundlage von Art. 49 Abs. 1
            lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den
            Zugriff auf Informationen in Ihr Endger&auml;t (z.&nbsp;B. via
            Device-Fingerprinting) eingewilligt haben, erfolgt die
            Datenverarbeitung zus&auml;tzlich auf Grundlage von &sect; 25 Abs. 1
            TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten
            zur Vertragserf&uuml;llung oder zur Durchf&uuml;hrung
            vorvertraglicher Ma&szlig;nahmen erforderlich, verarbeiten wir Ihre
            Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren
            verarbeiten wir Ihre Daten, sofern diese zur Erf&uuml;llung einer
            rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6
            Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage
            unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO
            erfolgen. &Uuml;ber die jeweils im Einzelfall einschl&auml;gigen
            Rechtsgrundlagen wird in den folgenden Abs&auml;tzen dieser
            Datenschutzerkl&auml;rung informiert.
          </Text>
          <Heading size="sm" as="h3">
            Widerruf Ihrer Einwilligung zur Datenverarbeitung
          </Heading>
          <Text>
            Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer
            ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen eine
            bereits erteilte Einwilligung jederzeit widerrufen. Die
            Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten
            Datenverarbeitung bleibt vom Widerruf unber&uuml;hrt.
          </Text>
          <Heading size="sm" as="h3">
            Widerspruchsrecht gegen die Datenerhebung in besonderen F&auml;llen
            sowie gegen Direktwerbung (Art. 21 DSGVO)
          </Heading>
          <Text>
            WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E
            ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS
            GR&Uuml;NDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN
            DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH
            EINZULEGEN; DIES GILT AUCH F&Uuml;R EIN AUF DIESE BESTIMMUNGEN
            GEST&Uuml;TZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN
            EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER
            DATENSCHUTZERKL&Auml;RUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR
            IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES
            SEI DENN, WIR K&Ouml;NNEN ZWINGENDE SCHUTZW&Uuml;RDIGE GR&Uuml;NDE
            F&Uuml;R DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE
            UND FREIHEITEN &Uuml;BERWIEGEN ODER DIE VERARBEITUNG DIENT DER
            GELTENDMACHUNG, AUS&Uuml;BUNG ODER VERTEIDIGUNG VON
            RECHTSANSPR&Uuml;CHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
          </Text>
          <Text>
            WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU
            BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE
            VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE
            DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH F&Uuml;R DAS
            PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT.
            WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN
            ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET
            (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
          </Text>
          <Heading size="sm" as="h3">
            Beschwerde&shy;recht bei der zust&auml;ndigen
            Aufsichts&shy;beh&ouml;rde
          </Heading>
          <Text>
            Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den
            Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh&ouml;rde,
            insbesondere in dem Mitgliedstaat ihres gew&ouml;hnlichen
            Aufenthalts, ihres Arbeitsplatzes oder des Orts des
            mutma&szlig;lichen Versto&szlig;es zu. Das Beschwerderecht besteht
            unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher
            Rechtsbehelfe.
          </Text>
          <Heading size="sm" as="h3">
            Recht auf Daten&shy;&uuml;bertrag&shy;barkeit
          </Heading>
          <Text>
            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
            oder in Erf&uuml;llung eines Vertrags automatisiert verarbeiten, an
            sich oder an einen Dritten in einem g&auml;ngigen, maschinenlesbaren
            Format aush&auml;ndigen zu lassen. Sofern Sie die direkte
            &Uuml;bertragung der Daten an einen anderen Verantwortlichen
            verlangen, erfolgt dies nur, soweit es technisch machbar ist.
          </Text>
          <Heading size="sm" as="h3">
            Auskunft, Berichtigung und L&ouml;schung
          </Heading>
          <Text>
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
            jederzeit das Recht auf unentgeltliche Auskunft &uuml;ber Ihre
            gespeicherten personenbezogenen Daten, deren Herkunft und
            Empf&auml;nger und den Zweck der Datenverarbeitung und ggf. ein
            Recht auf Berichtigung oder L&ouml;schung dieser Daten. Hierzu sowie
            zu weiteren Fragen zum Thema personenbezogene Daten k&ouml;nnen Sie
            sich jederzeit an uns wenden.
          </Text>
          <Heading size="sm" as="h3">
            Recht auf Einschr&auml;nkung der Verarbeitung
          </Heading>
          <Text>
            Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer
            personenbezogenen Daten zu verlangen. Hierzu k&ouml;nnen Sie sich
            jederzeit an uns wenden. Das Recht auf Einschr&auml;nkung der
            Verarbeitung besteht in folgenden F&auml;llen:
          </Text>
          <ul>
            <li>
              <Text>
                Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
                personenbezogenen Daten bestreiten, ben&ouml;tigen wir in der
                Regel Zeit, um dies zu &uuml;berpr&uuml;fen. F&uuml;r die Dauer
                der Pr&uuml;fung haben Sie das Recht, die Einschr&auml;nkung der
                Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </Text>
            </li>
            <li>
              <Text>
                Wenn die Verarbeitung Ihrer personenbezogenen Daten
                unrechtm&auml;&szlig;ig geschah/geschieht, k&ouml;nnen Sie statt
                der L&ouml;schung die Einschr&auml;nkung der Datenverarbeitung
                verlangen.
              </Text>
            </li>
            <li>
              <Text>
                Wenn wir Ihre personenbezogenen Daten nicht mehr ben&ouml;tigen,
                Sie sie jedoch zur Aus&uuml;bung, Verteidigung oder
                Geltendmachung von Rechtsanspr&uuml;chen ben&ouml;tigen, haben
                Sie das Recht, statt der L&ouml;schung die Einschr&auml;nkung
                der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </Text>
            </li>
            <li>
              <Text>
                Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
                haben, muss eine Abw&auml;gung zwischen Ihren und unseren
                Interessen vorgenommen werden. Solange noch nicht feststeht,
                wessen Interessen &uuml;berwiegen, haben Sie das Recht, die
                Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen
                Daten zu verlangen.
              </Text>
            </li>
          </ul>
          <Text>
            Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
            eingeschr&auml;nkt haben, d&uuml;rfen diese Daten &ndash; von ihrer
            Speicherung abgesehen &ndash; nur mit Ihrer Einwilligung oder zur
            Geltendmachung, Aus&uuml;bung oder Verteidigung von
            Rechtsanspr&uuml;chen oder zum Schutz der Rechte einer anderen
            nat&uuml;rlichen oder juristischen Person oder aus Gr&uuml;nden
            eines wichtigen &ouml;ffentlichen Interesses der Europ&auml;ischen
            Union oder eines Mitgliedstaats verarbeitet werden.
          </Text>
          <Heading size="sm" as="h3">
            SSL- bzw. TLS-Verschl&uuml;sselung
          </Heading>
          <Text>
            Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der
            &Uuml;bertragung vertraulicher Inhalte, wie zum Beispiel
            Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber
            senden, eine SSL- bzw. TLS-Verschl&uuml;sselung. Eine
            verschl&uuml;sselte Verbindung erkennen Sie daran, dass die
            Adresszeile des Browsers von &bdquo;http://&ldquo; auf
            &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in Ihrer
            Browserzeile.
          </Text>
          <Text>
            Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist,
            k&ouml;nnen die Daten, die Sie an uns &uuml;bermitteln, nicht von
            Dritten mitgelesen werden.
          </Text>
          <Text>
            Quelle:
            <Text as="a" href="https://www.e-recht24.de">
              eRecht24
            </Text>
          </Text>
        </Stack>
        <Footer css={{ marginTop: '2rem', paddingBottom: '2.5rem' }}>
          <Link as={GatsbyLink} to="/">
            CV
          </Link>
          <Link as={GatsbyLink} to="/imprint-de">
            Impressum
          </Link>
          {settings.useLocalization && (
            <Link as={GatsbyLink} to="/privacy-en">
              English version
            </Link>
          )}
        </Footer>
      </Stack>
    </React.Fragment>
  )
}

export default Privacy

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
