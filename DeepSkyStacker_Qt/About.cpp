#include <QDir>
#include <QSettings>
#include <QString>
#include <QDebug>
#include "About.h"
#include "ui/ui_About.h"
#include "DSSVersion.h"
#include <fitsio.h>
#include <tiffio.h>
#include <libraw/libraw_version.h>

#define xstr(s) str(s)
#define str(s) #s

About::About(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::About)
{
    QString strHTML("<body link=#0000ff></body><img valign=top align=right src=\"qrc:///logo.png\">");
    QString strText;
    QString copyright = DSSVER_COPYRIGHT;

    QStringList copyrightList = copyright.split(", ");
    for (auto& i: copyrightList) {
        i = i.replace(" ", "&nbsp;");
    }
    copyright = copyrightList.join(", ");

    strText = QString(QCoreApplication::translate("About", "DeepSkyStacker version %1")).arg(VERSION_DEEPSKYSTACKER);
    strText += "<br>";
    strText += copyright;
    strText = strText.replace("\n", "<br>");
    strHTML += "<b>" + strText + "</b><br>";
    strText = QString("<a href=\"%1\">%1</a><br><br>").arg("http://deepskystacker.free.fr/");
    strHTML += strText;

    strText = QString(QCoreApplication::translate("About", 
                "RAW file decoding by LibRaw (version %1)\nCopyright © 1997-2019 LibRaw LLC")).arg(LIBRAW_VERSION_STR);
    strText = strText.replace("\n", "<br>");
    strHTML += strText + "<br>";
    strText = QString("<a href=\"%1\">%1</a><br><br>").arg("http://libraw.org/");
    strHTML += strText;

    copyright = TIFFGetVersion();
    copyright = copyright.remove(0, copyright.indexOf("Version ") + 8);
    copyright = copyright.left(copyright.indexOf("Copyright")-1);
    strText = QString(QCoreApplication::translate("About", 
                "TIFF file encoding/decoding by LibTIFF (version %1)\nCopyright © 1988-1996 Sam Leffler\nCopyright © 1991-1996 Silicon Graphics, Inc.")).arg(copyright);
    strText = strText.replace("\n", "<br>");
    strHTML += strText + "<br>";
    strText = QString("<a href=\"%1\">%1</a><br><br>").arg("http://www.remotesensing.org/libtiff/");
    strHTML += strText;

    strText = QString(QCoreApplication::translate("About", 
                "FITS decoding by CFitsIO (version %1)\nCopyright NASA")).arg(xstr(CFITSIO_VERSION));
    strText = strText.replace("\n", "<br>");
    strHTML += strText + "<br>";
    strText = QString("<a href=\"%1\">%1</a><br>").arg("http://heasarc.gsfc.nasa.gov/docs/software/fitsio/fitsio.html");
    strHTML += strText;

    ui->setupUi(this);
    ui->comboBox->addItem(tr("Default"), "");
    QDir dir(":/i18n/", "DSS_*.qm");
    for(auto it: dir.entryList())
    {
        QString lang = it.section(".", 0, 0).right(2);
        QString langName = QLocale(lang).nativeLanguageName();
        langName[0] = langName[0].toUpper();
        ui->comboBox->addItem(langName, lang);
    }
    setLanguage(QSettings().value("Language", "").toString());

    ui->html->setText(strHTML);
}

About::~About()
{
    delete ui;
}

void About::setLanguage(QString lang)
{
    if (m_Language != lang)
    {
        m_Language = lang;
        ui->comboBox->setCurrentIndex(ui->comboBox->findData(m_Language));
        emit languageChanged();
    }
}

void About::selectLanguage(int idx)
{
    setLanguage(ui->comboBox->itemData(idx).toString());
}

void About::storeSettings()
{
    QSettings settings;
    settings.setValue("Language", m_Language);
}