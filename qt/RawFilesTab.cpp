#include "RawFilesTab.h"
#include "ui_RawFilesTab.h"

RawFilesTab::RawFilesTab(QWidget *parent) :
    QWidget(parent),
    ui(new Ui::RawFilesTab)
{
    ui->setupUi(this);
}

RawFilesTab::~RawFilesTab()
{
    delete ui;
}
