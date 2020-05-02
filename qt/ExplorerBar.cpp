#include <QMenu>
#include <QAction>
#include "ClickLabel.h"
#include "ExplorerBar.h"
#include "ui_ExplorerBar.h"
#include "About.h"
#include "RawDDPSettings.h"
#include "StackSettings.h"
#include <iostream>

ExplorerBar::ExplorerBar(QWidget *parent) :
    QWidget(parent),
    ui(new Ui::ExplorerBar)
{
    ui->setupUi(this);
}

ExplorerBar::~ExplorerBar()
{
    delete ui;
}

void ExplorerBar::linkActivated()
{
    std::cout << "linkActivated: " << std::endl;
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

    QAction *a = menu.exec(ui->label_13->mapToGlobal(QPoint(0,2 + ui->label_13->height())));
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