#include "ClickLabel.h"
#include "ExplorerBar.h"
#include "ui_ExplorerBar.h"
#include "About.h"
#include "RawDDPSettings.h"
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
