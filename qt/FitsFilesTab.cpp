#include "FitsFilesTab.h"
#include "ui/ui_FitsFilesTab.h"

FitsFilesTab::FitsFilesTab(QWidget *parent) :
    QWidget(parent),
    ui(new Ui::FitsFilesTab)
{
    ui->setupUi(this);
}

FitsFilesTab::~FitsFilesTab()
{
    delete ui;
}
