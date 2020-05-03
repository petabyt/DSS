#include <QMenu>
#include <QAction>
#include "ClickLabel.h"
#include "ExplorerBar.h"
#include "ui/ui_ExplorerBar.h"
#include "About.h"
#include "RawDDPSettings.h"
#include "StackSettings.h"

static void makeLink(QLabel *label, QString color, QString text)
{
    label->setText(QString("<a href='.' style='text-decoration: none; color: %1'>%2</a>").arg(color, text));
}

static void makeLink(QLabel *label, QString color)
{
    makeLink(label, color, label->text());
}

ExplorerBar::ExplorerBar(QWidget *parent) :
    QWidget(parent),
    ui(new Ui::ExplorerBar)
{
    QString defColor;
    ui->setupUi(this);
    defColor = palette().color(QPalette::ColorRole::WindowText).name();
    makeLink(ui->labelSettings, defColor);
    makeLink(ui->labelRawSettings, defColor);
    makeLink(ui->labelAbout, defColor);
}

ExplorerBar::~ExplorerBar()
{
    delete ui;
}

void ExplorerBar::linkActivated()
{
}

void ExplorerBar::onAbout()
{
    About dlg(this);

    dlg.exec();
}

void ExplorerBar::onOptionsRawDDPSettings()
{
    RawDDPSettings dlg(this);

    dlg.exec();
}

void ExplorerBar::onOptionsSettings()
{
    QMenu menu(this);
    QAction *aRegisterSettings;
    QAction *aStackingSettings;

    aRegisterSettings = menu.addAction(tr("Register Settings..."));
    aStackingSettings = menu.addAction(tr("Stacking Settings..."));

    QAction *a = menu.exec(ui->labelSettings->mapToGlobal(QPoint(0,2 + ui->labelSettings->height())));
    if (a == aRegisterSettings)
    {
        printf("Register settings\n");
    }
    else if (a == aStackingSettings)
    {
        StackSettings dlg;
        dlg.exec();
    }
}