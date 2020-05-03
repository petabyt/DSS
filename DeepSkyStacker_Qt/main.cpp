#include <QApplication>
#include <QTranslator>
#include <QSettings>
#include "AskRegistering.h"
#include "AlignmentParameters.h"
#include "BackgroundOptions.h"
#include "About.h"
#include "DeepStackerDlg.h"

int main(int argc, char **argv)
{
    /* Force strings from Qt dialog buttons to appear in translation files */
    Q_UNUSED(QT_TRANSLATE_NOOP("QPlatformTheme", "Cancel"));
    Q_UNUSED(QT_TRANSLATE_NOOP("QPlatformTheme", "Apply"));
    Q_UNUSED(QT_TRANSLATE_NOOP("QPlatformTheme", "&Yes"));
    Q_UNUSED(QT_TRANSLATE_NOOP("QPlatformTheme", "&No"));
    Q_UNUSED(QT_TRANSLATE_NOOP("QPlatformTheme", "OK"));

    QCoreApplication::setOrganizationName("DeepSkyStacker");
    QCoreApplication::setOrganizationDomain("deepskystacker.free.fr");
    QCoreApplication::setApplicationName("DeepSkyStacker");

    QApplication app(argc, argv);
    QTranslator translator;
    QString language = QSettings().value("Language", "").toString();
    
    if (language == "")
        language = QLocale().name().left(2);

    if (translator.load(":/i18n/DSS_" + language + ".qm"))
    {
        app.installTranslator(&translator);
    }

    DeepStackerDlg ask;
    
    ask.show();
    
    return app.exec();
}
