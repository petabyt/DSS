#include "DropFilesDlg.h"
#include "ui_DropFilesDlg.h"

DropFilesDlg::DropFilesDlg(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::DropFilesDlg)
{
    ui->setupUi(this);
}

DropFilesDlg::~DropFilesDlg()
{
    delete ui;
}
