#include <QApplication>
#include <QTranslator>
#include "AskRegistering.h"
#include "AlignmentParameters.h"
#include "BackgroundOptions.h"
#include "About.h"

int main(int argc, char **argv)
{
    /* Force strings from Qt dialog buttons to appear in translation files */
    Q_UNUSED(QT_TRANSLATE_NOOP("QPlatformTheme", "Cancel"));
    Q_UNUSED(QT_TRANSLATE_NOOP("QPlatformTheme", "Apply"));
    Q_UNUSED(QT_TRANSLATE_NOOP("QPlatformTheme", "&Yes"));
    Q_UNUSED(QT_TRANSLATE_NOOP("QPlatformTheme", "&No"));
    Q_UNUSED(QT_TRANSLATE_NOOP("QPlatformTheme", "OK"));

    QApplication app(argc, argv);
    QTranslator translator;
    QString language = QLocale().name().left(2);

    if (translator.load(":/i18n/DSS_" + language + ".qm"))
    {
        app.installTranslator(&translator);
    }

    BackgroundOptions ask;
    
    ask.show();
    
    return app.exec();
}
