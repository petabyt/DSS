#include <QApplication>
#include <QTranslator>
#include <QSettings>
#include <QSharedMemory>
#include <QDebug>
#include <QMessageBox>
#include <QString>
#include "AskRegistering.h"
#include "AlignmentParameters.h"
#include "BackgroundOptions.h"
#include "About.h"
#include "DeepStackerDlg.h"
#include <exception>

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
    QSharedMemory hMutex("DeepSkyStacker.Mutex.UniqueID.12354687");
    bool bFirstInstance = true;
    int nRetCode = 0;

    /* Attempt to create shared memory segment with the key */
    if (!hMutex.create(1))
        bFirstInstance = false;

    /* Install translation */
    QTranslator translator;
    QLocale locale;
    QString language = QSettings().value("Language", "").toString();

    /* Language was not defined in preferences. Select the system default */
    if (language == "") {
        language = QLocale().name();
    }

    qDebug() << language;

    /* Install language if the translation is existing */
    if (translator.load("DSS." + language, ":/i18n/")) {
        app.installTranslator(&translator);
    }

    try {
        DeepStackerDlg dlg;
        dlg.show();
        nRetCode = app.exec();
    }
    catch (std::exception &e)
    {
        QMessageBox::critical(nullptr, "DeepSkyStacker", QString(QCoreApplication::translate("main", "Exception caught:\n\n%1")).arg(e.what()));
    }
    catch (...)
    {
        QMessageBox::critical(nullptr, "DeepSkyStacker", QCoreApplication::translate("main", "Unknown exception caught"));
    }

    return nRetCode;
}
