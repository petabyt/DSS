#include <QApplication>
#include <QTranslator>
#include "AskRegistering.h"
#include "AlignmentParameters.h"
#include "BackgroundOptions.h"
#include "About.h"

int main(int argc, char **argv)
{
    QApplication app(argc, argv);
    QTranslator translator;
    QString language = QLocale().name().left(2);

    if (translator.load(":/i18n/DSS_" + language + ".qm"))
    {
        app.installTranslator(&translator);
    }

    About ask;
    
    ask.show();
    
    return app.exec();
}
