#include "CheckAbove.h"
#include "ui_CheckAbove.h"

CheckAbove::CheckAbove(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::CheckAbove)
{
    ui->setupUi(this);
}

CheckAbove::~CheckAbove()
{
    delete ui;
}
