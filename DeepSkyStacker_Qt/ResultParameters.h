#ifndef RESULTPARAMETERS_H
#define RESULTPARAMETERS_H

#include <QWidget>

namespace Ui {
class ResultParameters;
}

class ResultParameters : public QWidget
{
    Q_OBJECT

public:
    explicit ResultParameters(QWidget *parent = nullptr);
    ~ResultParameters();

private:
    Ui::ResultParameters *ui;
};

#endif // RESULTPARAMETERS_H
