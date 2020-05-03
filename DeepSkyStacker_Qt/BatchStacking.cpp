#include "BatchStacking.h"
#include "ui/ui_BatchStacking.h"

BatchStacking::BatchStacking(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::BatchStacking)
{
    ui->setupUi(this);
}

BatchStacking::~BatchStacking()
{
    delete ui;
}
