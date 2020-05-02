#include <QDirIterator>
#include <QString>
#include "About.h"
#include "ui_About.h"

About::About(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::About)
{
    QString strHTML("<body link=#0000ff></body><img valign=top align=right src=\"qrc:///logo.png\">");
    QString strText;
    
    strText = QString(QCoreApplication::translate("About", "DeepSkyStacker version %1")).arg("1.0.0.1" /* VERSION_DEEPSKYSTACKER */);
    strText += "<br>";
    strText += /* DSSVER_COPYRIGHT */ "Copyright © 2006-2019 Luc Coiffier;\n\
        Copyright © 2018-2020 David&nbsp;C.&nbsp;Partridge, Tony&nbsp;Cook, Mat&nbsp;Draper, Simon&nbsp;C.&nbsp;Smith, Vitali&nbsp;Pelenjow, Tomas&nbsp;Tatara";
    strText = strText.replace("\n", "<br>");
    strHTML += "<b>" + strText + "</b><br>";
    strText = QString("<a href=\"%1\">%1</a><br><br>").arg("http://deepskystacker.free.fr/");
    strHTML += strText;

    strText = QString(QCoreApplication::translate("About", 
                "RAW file decoding by LibRaw (version %1)\nCopyright © 1997-2019 LibRaw LLC")).arg("0.19.3" /* VERSION_DCRAW */);
    strText = strText.replace("\n", "<br>");
    strHTML += strText + "<br>";
    strText = QString("<a href=\"%1\">%1</a><br><br>").arg("http://libraw.org/");
    strHTML += strText;

    strText = QString(QCoreApplication::translate("About", 
                "TIFF file encoding/decoding by LibTIFF (version %1)\nCopyright © 1988-1996 Sam Leffler\nCopyright © 1991-1996 Silicon Graphics, Inc.")).arg("4.0.9" /* VERSION_TIFF */);
    strText = strText.replace("\n", "<br>");
    strHTML += strText + "<br>";
    strText = QString("<a href=\"%1\">%1</a><br><br>").arg("http://www.remotesensing.org/libtiff/");
    strHTML += strText;

    strText = QString(QCoreApplication::translate("About", 
                "FITS decoding by CFitsIO (version %1)\nCopyright NASA")).arg("3.43" /* VERSION_CFITSIO */);
    strText = strText.replace("\n", "<br>");
    strHTML += strText + "<br>";
    strText = QString("<a href=\"%1\">%1</a><br>").arg("http://heasarc.gsfc.nasa.gov/docs/software/fitsio/fitsio.html");
    strHTML += strText;

    ui->setupUi(this);
    ui->comboBox->addItem(tr("Default"));
    QDirIterator it(":/i18n/");
    while (it.hasNext()) {
        QString lang = it.next().section(".", 0, 0).right(2);
        QString langName = QLocale(lang).nativeLanguageName();
        langName[0] = langName[0].toUpper();
        ui->comboBox->addItem(langName, lang);
    }

    ui->html->setText(strHTML);
}

About::~About()
{
    delete ui;
}
