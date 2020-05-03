#include "StackingParameters.h"
#include "ui/ui_StackingParameters.h"

StackingParameters::StackingParameters(QWidget *parent) :
    QWidget(parent),
    ui(new Ui::StackingParameters)
{
    ui->setupUi(this);
    for (int i=0; i < 5; i++)
        ui->gridLayout_2->setRowStretch(i+1, 1000);
}

StackingParameters::~StackingParameters()
{
    delete ui;
}
