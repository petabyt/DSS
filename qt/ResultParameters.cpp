#include "ResultParameters.h"
#include "ui_ResultParameters.h"

ResultParameters::ResultParameters(QWidget *parent) :
    QWidget(parent),
    ui(new Ui::ResultParameters)
{
    ui->setupUi(this);
}

ResultParameters::~ResultParameters()
{
    delete ui;
}
