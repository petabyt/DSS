#include "CometStacking.h"
#include "ui_CometStacking.h"

CometStacking::CometStacking(QWidget *parent) :
    QWidget(parent),
    ui(new Ui::CometStacking)
{
    ui->setupUi(this);
}

CometStacking::~CometStacking()
{
    delete ui;
}
